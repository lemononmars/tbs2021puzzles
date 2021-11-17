<script lang=ts >
	import {store} from '../../stores/save'
	import {onMount} from 'svelte'
	import Textfield from '@smui/textfield'
	import Button, { Label } from '@smui/button';
	import IconButton from '@smui/icon-button';
	import {Facebook, Twitter} from 'svelte-share-buttons-component';

	let fburl = `https://tbs2021puzzles.herokuapp.com/round1&display=popup&hashtag=#tbs_2021&quote=อันดับที่`

	import Snackbar, {SnackbarComponentDev, Actions} from '@smui/snackbar';
	let snackbarWithClose: SnackbarComponentDev;
	let snackbarLabel = ''
	import io from 'socket.io-client';
	const socket = io()

	let solved = [false,false,false,false,false]
	let answers = ['','','','','']
	$: numsolved = solved.filter(x => x).length
	let userInfo = {username: '', email: ''}
	let finalRanking = 0

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
		var submission = {round: 1, id:id, answer: answers[id]}

		socket.emit('submit answer', submission, function(res){
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

	function submitFinal(){
		var submission = {answer: answers[4], user: userInfo.username, email:userInfo.email} //submit final answer one more time
		socket.emit('submit final answer', submission, function(res){
			if(res.success) {
				snackbarLabel = 'บันทึกข้อมูลแล้ว'
				snackbarWithClose.open()
			}
			else {
				snackbarLabel = 'คำตอบไม่ถูกต้อง ลองตอบใหม่'
				snackbarWithClose.open()
			}
		})
	}
</script>

<Snackbar bind:this={snackbarWithClose}>
	<Label>{snackbarLabel}</Label>
	<Actions>
	  <IconButton class="material-icons" title="Dismiss">close</IconButton>
	</Actions>
 </Snackbar>

<div id = 'main'>
	{#if !solved[4]}
		{#if numsolved < 4}
			{#each [0,1,2,3] as index}
				<span style="text-alignt: center; vertical-align: middle">
					<a href={`/enter/puzzle${index+1}`}> ปริศนาข้อที่ {index+1} </a>
					<Textfield variant="outlined" bind:value={answers[index]} on:keydown={keyPressed} disabled={solved[index]}/>
					{#if solved[index]}
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
		<h1>ปริศนาข้อสุดท้าย</h1>
		<img src={'/enter/final.png'} height="400px" width="auto" alt="final puzzle"/>
		<span>
			<Textfield variant="outlined" bind:value={answers[4]} on:keydown={keyPressed} disabled={solved[4]}/>
			<Button on:click={() => submit(4)} variant="raised">
				<Label>ส่งคำตอบ</Label>
			</Button>
		</span>
		{/if}
	{:else}
		ยินดีด้วย!!!

		<Textfield variant="outlined" bind:value={userInfo.username} label="ชื่อใน gather.town" required/>
		<Textfield variant="outlined" bind:value={userInfo.email} label="email ที่ใช้สมัคร" required/>
		<Button on:click={() => submitFinal()} variant="raised">
			<Label>ส่งข้อมูล</Label>
		</Button>

		<span>
			<Facebook class="share-button" url={fburl} />
			<Twitter class="share-button" text="แก้ปริศนาได้เป็นคนที่ {finalRanking} Thailand Board Game Show 2021 Puzzles" hashtags="tbs_2021,svelte"/>
		</span>
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