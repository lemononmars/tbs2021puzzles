<script lang=ts >
	import {store} from '../../stores/save'
	import {onMount} from 'svelte'
	import Textfield from '@smui/textfield'
	import Button, { Label } from '@smui/button';
	import IconButton from '@smui/icon-button';
	import Select, { Option } from '@smui/select';

	import Snackbar, {SnackbarComponentDev, Actions} from '@smui/snackbar';
	let snackbarWithClose: SnackbarComponentDev;
	let snackbarLabel = ''
	import io from 'socket.io-client';
	const socket = io()

	import { goto } from "@sapper/app";

	let solved = [false,false,false,false]
	let answers = ['','','','']
	$: numsolved = solved.filter(x => x).length
	let finalanswer = ['','']
	const playerNames = []
	const playerScores = []
	const gameList = []

	onMount(async() => {
		store.useLocalStorage()
		const submission = {round:1, answers: $store.round2answers}
		socket.emit('verify save', submission, function(s: boolean[], a: string[]){
			solved = s
			answers = a
		})

		const waitimage = await fetch(`./enter/puzzle1.png`) //there should be a better way....
	})

	function submit(id: number){
		var submission
		if(id == 4)
			submission = {round: 2, id:id, answer: answers[id]}
		else
			submission = {round: 1, id:id, answer: answers[id]}

		console.log(submission)
		socket.emit('submit answer', submission, function(res){
			console.log(res)
			if(res.isCorrect) {
				answers[id] = answers[id].trim().toUpperCase()
				$store.round2answers[id] = answers[id]
				solved[id] = true
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
			submit(answers.indexOf(e.target.value));
  	}
</script>

<Snackbar bind:this={snackbarWithClose}>
	<Label>{snackbarLabel}</Label>
	<Actions>
	  <IconButton class="material-icons" title="Dismiss">close</IconButton>
	</Actions>
 </Snackbar>

<div id = 'main'>
	{#if numsolved < 4}
		{#each solved as s, index}
			<span style="text-alignt: center; vertical-align: middle">
				<a href={`/enter/puzzle${index+1}`}> ปริศนาข้อที่ {index+1} </a>
				<Textfield variant="outlined" bind:value={answers[index]} on:keydown={keyPressed} disabled={s}/>
				{#if s}
					<Button variant="outlined" disabled>
						<Label>ถูกต้อง!</Label>
					</Button>
				{:else}
					<Button on:click={() => submit(index)} variant="raised">
						<Label>ส่งคำตอบ</Label>
					</Button>
				{/if}
			</span>
		{/each}
	{:else}
		<Select variant="outlined" bind:value={finalanswer[0]}>
			<Option value="0">เลือกชื่อ</Option>
			{#each playerNames as name, index}
				<Option value={index}> 
					{name}
				</Option>
			{/each}
		</Select>
	{/if}
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