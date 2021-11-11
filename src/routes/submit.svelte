<script lang=ts>
	import {store} from '../stores/save'
	import {onMount} from 'svelte'
	import ClueTable from '../components/ClueTable.svelte';
	import Textfield from '@smui/textfield'
	import Button, { Label } from '@smui/button';
	import IconButton from '@smui/icon-button';
	import Dialog, { Title, Content, Actions } from '@smui/dialog';
	let dialogOpen = false;
	import Snackbar, {SnackbarComponentDev,} from '@smui/snackbar';
	let snackbarWithClose: SnackbarComponentDev;
	let snackbarLabel = ''
	import io from 'socket.io-client';
	const socket = io()

	const puzzleIDs = [0,1,2,3,4,5]
	let solved = [false, false, false, false, false, false]
	let answers = [' ',' ',' ',' ',' ',' ']
	const iconurls = [0,1,2,3,4,5].map(x => `./puzzleicon${x+1}.png`)

	onMount(async() => {
		store.useLocalStorage()
		socket.emit('verify save', $store.answers, function(s, a){
			solved = s
			answers = a
		})

		const res = await fetch(`./puzzleicon1.png`) //there should be a better way....
	})

	function submit(id: number){
		var submission = {id:id, answer: answers[id], user: $store.user, email: $store.email}
		socket.emit('submit answer', submission, function(res){
			console.log(res)
			if(res.isCorrect) {
				answers[id] = answers[id].trim().toUpperCase()
				$store.answers[id] = answers[id].trim().toUpperCase()
				solved[id] = true
				snackbarLabel = 'ถูกต้อง!'
				if(res.isFinished){
					dialogOpen = true
				}
			}	
			else{
				snackbarLabel = 'ยังไม่ถูก'
			}
			snackbarWithClose.open()
		})
	}

	let user = ''
	function submitFinal(){
		var submission = {answer: answers[5], user: user} //submit final answer one more time
		socket.emit('submit final answer', submission, function(res){
			if(res.success) {
				dialogOpen = false
				snackbarLabel = 'บันทึกข้อมูลแล้ว'
				snackbarWithClose.open()
			}
			else {
				// asked to resubmitt?
			}
		})
	}

	function keyPressed(e){
   	if (e.keyCode === 13)
			submit(answers.indexOf(e.target.value));
  	};
</script>

<svelte:head>
	<title>ส่งคำตอบ</title>
</svelte:head>

<Snackbar bind:this={snackbarWithClose}>
	<Label>{snackbarLabel}</Label>
	<Actions>
	  <IconButton class="material-icons" title="Dismiss">close</IconButton>
	</Actions>
 </Snackbar>

<div id = 'main'>
	<ClueTable/>

	<table>
	{#each puzzleIDs as i}
		<tr style="text-alignt: center; vertical-align: middle">
			<td><img src={iconurls[i]} alt = 'puzzle icon'/></td>
			<td><Textfield variant="outlined" bind:value={answers[i]} on:keydown={keyPressed} disabled={solved[i]}/></td>
			<td>
				{#if solved[i]}
					<Button variant="outlined" disabled>
						<Label>ถูกต้อง!</Label>
					</Button>
				{:else}
					<Button on:click={() => submit(i)} variant="raised">
						<Label>ส่งคำตอบ</Label>
					</Button>
				{/if}
			</td>
		<tr>
   {/each}
	</table>
</div>

<Dialog 
	bind:open={dialogOpen} aria-labelledby="simple-title" aria-describedby="simple-content"
	scrimClickAction=""
	escapeKeyAction=""
>
	<Title id="simple-title">ขอแสดงความยินดีด้วย <IconButton class="material-icons">emoji_emotions</IconButton></Title>
	<Content id="simple-content">
		<div>
			นำคำตอบนี้ไปใส่ในประตู เพื่อไปด่านต่อไป<br><br>
			กรอกชื่อเพื่อแสดงในตารางอันดับ<br>
			<Textfield variant="outlined" label="ชื่อ" bind:value={user}/><br/>
		</div>
		<Actions>
			<Button variant="outlined" on:click={submitFinal}>
				<Label>ส่งข้อมูล</Label>
			</Button>
		</Actions>
	</Content>
</Dialog>

<style>
	#main{
		background-color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: auto;
	}
</style>