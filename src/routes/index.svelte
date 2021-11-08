<script>
	var exports = {}
	import {store} from '../stores/save'
	import {onMount} from 'svelte'
	import Textfield from '@smui/textfield'
	import Button, { Label } from '@smui/button';
	import {io} from 'socket.io-client';
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
	var stateColors = ['primiary', 'secondary']

	onMount(async() => {
		store.useLocalStorage()
		socket.emit('verify save', $store, function(s, a){
			solved = s
			answers = a
		})

		const res = await fetch(`./puzzleicon1.png`)
	})

	function submit(id){
		var submission = {id:id, answer: answers[id]}
		socket.emit('submit answer', submission, function(res){
			console.log(res.isCorrect)
			if(res.isCorrect) {
				answers[id] = answers[id].trim().toUpperCase()
				$store[id] = answers[id].trim().toUpperCase()
				solved[id] = true
			}
			else{
				styles[id] = "background-color:rgb(200,0,0,0.5)"
				setInterval(()=>{styles[id]=''}, 1000)
			}
			// if(res.rank) > show congratulation message 
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
	<Button on:click={clearMarks} color='secondary'>
		<Label>Clear marks</Label>
	</Button>

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