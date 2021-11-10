<script lang=ts>
	import {store} from '../stores/save'
	import {onMount} from 'svelte'
	import Textfield from '@smui/textfield'
	import Button, { Label } from '@smui/button';
	import IconButton from '@smui/icon-button';
	import Tooltip, { Wrapper } from '@smui/tooltip';
	import Dialog, { Title, Content, Actions } from '@smui/dialog';
	let open = false;
	import Snackbar, {SnackbarComponentDev,} from '@smui/snackbar';
	let snackbarWithClose: SnackbarComponentDev;
	let snackbarLabel = ''
	import io from 'socket.io-client';
	const socket = io()

	const puzzleIDs = [0,1,2,3,4,5]
	let solved = [false, false, false, false, false, false]
	let answers = [' ',' ',' ',' ',' ',' ']
	const iconurls = [0,1,2,3,4,5].map(x => `./puzzleicon${x+1}.png`)
	let styles=['','','','','','']

	const letterTable = [
		['T','A','B','U','L'],
		['D','W','S','E','K'],
		['E','E','T','R','E'],
		['H','N','N','C','R'],
		['T','R','I','D','Y']
	]
	var letterStates = [
		[0,0,0,0,0],
		[0,0,0,0,0],
		[0,0,0,0,0],
		[0,0,0,0,0],
		[0,0,0,0,0],
	]
	var stateColors = ['primary', 'secondary']

	onMount(async() => {
		store.useLocalStorage()
		socket.emit('verify save', $store.answers, function(s, a){
			solved = s
			answers = a
		})

		const res = await fetch(`./puzzleicon1.png`) //there should be a better way....
	})

	function submit(id){
		var submission = {id:id, answer: answers[id], user: $store.user, email: $store.email}
		socket.emit('submit answer', submission, function(res){
			if(res.isCorrect) {
				answers[id] = answers[id].trim().toUpperCase()
				$store.answers[id] = answers[id].trim().toUpperCase()
				solved[id] = true
				snackbarLabel = 'ถูกต้อง!'
			}
			else{
				snackbarLabel = 'ยังไม่ถูก'
			}
			snackbarWithClose.open()
			// if(res.rank > -1) > show congratulation message 
		})
	}

	function flipState(i,j){
		letterStates[i][j] = 1 - letterStates[i][j]
	}

	function clearMarks(){
		letterStates = [
			[0,0,0,0,0],
			[0,0,0,0,0],
			[0,0,0,0,0],
			[0,0,0,0,0],
			[0,0,0,0,0],
		]
	}

	function keyPressed(e){
   	if (e.keyCode === 13)
			submit(answers.indexOf(e.target.value));
  	};
</script>

<svelte:head>
	<title>TBS2021 Puzzles</title>
</svelte:head>

<Snackbar bind:this={snackbarWithClose}>
	<Label>{snackbarLabel}</Label>
	<Actions>
	  <IconButton class="material-icons" title="Dismiss">close</IconButton>
	</Actions>
 </Snackbar>

<Dialog bind:open aria-labelledby="simple-title" aria-describedby="simple-content">
  <Title id="simple-title">ขอแสดงความยินดีด้วย <IconButton class="material-icons">emoji_emotions</IconButton> </Title>
  <Content id="simple-content">ชื่อของคุณ {$store.user} ได้ถูกบันทึกในตารางอันดับแล้ว!</Content>
</Dialog>

<div id = 'main'>
	<table>
	{#each letterTable as row, i}
		<tr>
		{#each row as l, j}
		<td>
			<Button value='true' style="font-size: 30px" on:click={()=>flipState(i,j)} color={stateColors[letterStates[i][j]]} variant="outlined">
				<Label>{l}</Label>
			</Button>
		</td>
		{/each}
		</tr>
	{/each}
	</table>
	<span>
	<Button on:click={clearMarks} color='secondary'>
		<Label>รีเซ็ตตาราง</Label>
	</Button>
	<Wrapper>
	<IconButton class="material-icons">info</IconButton>
	<Tooltip>ปุ่มในตารางไว้ช่วยทดเท่านั้น ไม่ต้องกดเพื่อแก้ปริศนา</Tooltip>
	</Wrapper>
	</span>

	<table>
	{#each puzzleIDs as i}
		<tr style="text-alignt: center; vertical-align: middle">
			<td><img src={iconurls[i]} alt = 'puzzle icon'/></td>
			<td><Textfield variant="outlined" bind:value={answers[i]} on:keydown={keyPressed} disabled={solved[i]} style={styles[i]}/></td>
			<td>
				{#if solved[i]}
					<Button variant="outlined" disabled>
						<Label>Solved!</Label>
					</Button>
				{:else}
					<Button on:click={() => submit(i)} variant="raised">
						<Label>Submit</Label>
					</Button>
				{/if}
			</td>
		<tr>
   {/each}
	</table>
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