<script lang=ts >
	import {store} from '../../stores/save'
	import {onMount} from 'svelte'
	import Textfield from '@smui/textfield'
	import Button, { Label } from '@smui/button';
	import IconButton from '@smui/icon-button';
	import Snackbar, {SnackbarComponentDev, Actions} from '@smui/snackbar';
	let snackbarWithClose: SnackbarComponentDev;
	let snackbarLabel = ''
	import io from 'socket.io-client';
	const socket = io()

	import { goto } from "@sapper/app";
	import { stores } from "@sapper/app";
   const { page } = stores();
   const { params } = $page;
   const { id } = params;
	const puzzleId = id-1
	
	//export let id: number
	let solved = false
	let answer = ''
	let iconurl = `./enter/puzzle${puzzleId+1}.png`
	let loaded = false

	onMount(async() => {
		store.useLocalStorage()
		const submission = {round:1, answers: $store.round2answers}
		socket.emit('verify save', submission, function(s: boolean[], a: string[]){
			console.log(a)
			solved = s[puzzleId] // take only the current one
			answer = a[puzzleId]
		})
		if(id.length > 1 || puzzleId > 4)
			goto('/enter/')

		const waitimage = await fetch(`./enter/puzzle${puzzleId}.png`) //there should be a better way....
		loaded = true
	})

	function submit(){
		var submission = {round: 1, id:puzzleId, answer: answer}
		socket.emit('submit answer', submission, function(res){
			if(res.isCorrect) {
				answer = answer.trim().toUpperCase()
				$store.round2answers[puzzleId] = answer
				solved = true
				snackbarLabel = 'ถูกต้อง!'
			}	
			else{
				snackbarLabel = 'ยังไม่ถูก'
			}
			snackbarWithClose.open()
		})
	}

	function keyPressed(e){
   	if (e.keyCode === 13)
			submit();
  	}
</script>

<Snackbar bind:this={snackbarWithClose}>
	<Label>{snackbarLabel}</Label>
	<Actions>
	  <IconButton class="material-icons" title="Dismiss">close</IconButton>
	</Actions>
 </Snackbar>

<div id = 'main'>
	<span style="text-alignt: center;">
		{#if loaded}
			<img src={iconurl} alt="puzzle"/>
		{/if}
	</span>
	<span style="text-alignt: center; vertical-align: middle">
		<Textfield variant="outlined" bind:value={answer} on:keydown={keyPressed} disabled={solved}/>
		{#if solved}
			<Button variant="outlined" disabled>
				<Label>ถูกต้อง!</Label>
			</Button>
		{:else}
			<Button on:click={() => submit()} variant="raised">
				<Label>ส่งคำตอบ</Label>
			</Button>
		{/if}
	<span>
</div>

<style>
	#main{
		background-color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: auto;
	}
</style>