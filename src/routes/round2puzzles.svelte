<script lang="ts">
	import Card, {Content, Actions} from '@smui/card';
	import Button, { Label } from '@smui/button';
	import Drawer, {AppContent} from '@smui/drawer';
	import List, { Item, Text} from '@smui/list';
	import Textfield from '@smui/textfield'
	import IconButton from '@smui/icon-button';
	import Dialog, { Title, Content, Actions } from '@smui/dialog';
	let dialogOpen = false;
	import Snackbar, {SnackbarComponentDev,} from '@smui/snackbar';
	let snackbarWithClose: SnackbarComponentDev;
	let snackbarLabel = ''

	import {store, currentTime} from '../stores/save'
	import {onMount} from 'svelte'
	import {hintStrings} from './_solution.json'
	import submitAnswer from './_checker.js'

	let solved = [false, false, false, false, false]
	let answers = ['','','','','',]
	let loaded = false
	$: numsolved = solved.filter(x => x).length

	onMount(async() => {
		store.useLocalStorage()
		solved = $store.round2answers.map(e=>e !== '')
		answers = $store.round2answers
		loaded = true
	})

	let activeDrawer = 0
	$: activePuzzle = activeDrawer

	var puzzleTitles = [0,1,2,3].map(x => `ปริศนาข้อที่ ${x+1}`)
	puzzleTitles = [... puzzleTitles, 'ปริศนาข้อสุดท้าย']
	var puzzleImages = [0,1,2,3].map(x=> `<img src="./enter/puzzle${x+1}.png" style="max-width: 100%;
  	height:auto" alt="puzzle${x+1}"/>`)
	puzzleImages = [... puzzleImages, `<img src="./enter/final.png" style="max-width: 100%;
  	height:auto" alt="puzzle final"/>`]

	let timeTotal = 0
	let timeTotalString = ''
	
	function submit(id: number){
		var submission = {round: 1, id:id, answer: answers[id]}
		var res = submitAnswer(submission)
		if(res.isCorrect) {
			answers[id] = answers[id].trim().toUpperCase()
			$store.round1answers[id] = answers[id]
			solved[id] = true
			if(res.isFinished) {
				dialogOpen = true
				timeTotal =  $currentTime.getTime() - $store.timeStarted
				timeTotalString = `${Math.floor(timeTotal / 60000)} นาที ${Math.floor((timeTotal % 60000)/1000)} วินาที`
			}
		}	
		snackbarLabel = res.message
		snackbarWithClose.open()
	}

	function keyPressed(e){
   	if (e.keyCode === 13)
			submit(answers.indexOf(e.target.value));
  	};
	function setActive(act: number){
		activeDrawer = act
	}

	function revealHint(){
		snackbarLabel = hintStrings[activePuzzle]
		snackbarWithClose.open()
	}
</script>

<div class = 'main'>
	{#if loaded && $store.round1answers[5] === ''}
		<h2>ตอบปริศนาข้อสุดท้ายของด่าน 1 ก่อน ถึงจะเริ่มเล่นด่าน 2 ได้</h2>
	{:else}
	<div class="drawer-container">
		<Drawer>
		  <Content>
			 <List>
				{#each Array(5) as _unused, id}
				<Item
				  href="javascript:void(0)"
				  on:click={() => setActive(id)}
				  activated={activePuzzle === id}
				>
					<Text>{puzzleTitles[id]}</Text>
				</Item>
				{/each}
			 </List>
		  </Content>
		</Drawer>
	  
		<AppContent class="app-content">
			<div class="main-content">
				<div class="card-container">
				<Card>
					{#if activePuzzle == 4 && numsolved < 4}
						<h2 style="width: max-width">ตอบปริศนาทั้ง 4 ข้อให้ครบ แล้วปริศนาข้อสุดท้ายจะปรากฎขึ้นมา</h2>
					{:else}
						{@html puzzleImages[activePuzzle]}
						<span class='flex-row'>
							{#if activeDrawer === 2}
								<a href='https://puzz.link/p?numlin/9/9/h1j32j4l5v67o2g4l7r3j165i' target='_blank'>คลิกที่นี่เพื่อเล่นบนเว็บ</a>
							{/if}
							<Textfield 
								variant="outlined" 
								style='max-width: 100px'
								bind:value={answers[activePuzzle]} 
								on:keydown={keyPressed} 
								disabled={solved[activePuzzle]}
							/>
								{#if solved[activePuzzle]}
									<Button variant="outlined" disabled>
										<Label>ถูกต้อง!</Label>
									</Button>
								{:else}
									<Button on:click={() => submit(activePuzzle)} variant="raised">
										<Label>ส่งคำตอบ</Label>
									</Button>
									<Button on:click={() => revealHint()} variant="raised" color="secondary">
										<Label>ขอคำใบ้</Label>
									</Button>
								{/if}
						</span>
					{/if}
				</Card>
				</div>
			</div>
		</AppContent>
	</div>
	{/if}
</div>

<Snackbar bind:this={snackbarWithClose}>
	<Label>{@html snackbarLabel}</Label>
	<Actions>
	  <IconButton class="material-icons" title="Dismiss">close</IconButton>
	</Actions>
 </Snackbar>
 
<Dialog 
bind:open={dialogOpen} aria-labelledby="simple-title" aria-describedby="simple-content"
scrimClickAction=""
escapeKeyAction=""
>
	<Title id="simple-title">🎉คุณคือผู้พิชิตปริศนา TBS2021🎉</Title>
	<Content id="simple-content">
		<div>
			คุณใช้เวลาทั้งสิ้น {timeTotalString} <br><br>
		</div>
	</Content>
	<Actions>
		<Button on:click={()=>dialogOpen = false}>ปิด</Button>
	 </Actions>
</Dialog>

<style>
	.drawer-container {
	  position: relative;
	  display: flex;
	  height: 600px;
	  width: clamp(400px, 90%, 1200px);
	  border: 1px solid
		 var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
	  overflow: auto;
	  z-index: 0;
	}

	.card-container{
		text-align:center
	}

	.main-content {
    overflow: auto;
    padding: 10px;
	 width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
</style>