<script lang=ts >
	import {store, timeStore, currentTime} from '../../stores/save'
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
	
	let solved = false
	let answer = ''
	let iconurl = `./enter/puzzle${puzzleId+1}.png`
	let loaded = false
	let timeStarted = 0
	let waitTime = 1200000 // 20 minutes = 1200000
	$: timeLeft = waitTime - $currentTime.getTime() + timeStarted
	$: timeMinuteString = timeLeft < 0 || Math.floor(timeLeft / 60000) === 0? '':`${Math.floor(timeLeft / 60000)} นาที`
	$: timeLeftString = timeLeft < 0? '0': `${timeMinuteString} ${Math.floor((timeLeft % 60000)/1000)} วินาที`

	onMount(async() => {
		store.useLocalStorage()
		const submission = {round:1, answers: $store.round2answers}
		socket.emit('verify save', submission, function(s: boolean[], a: string[]){
			solved = s[puzzleId] // take only the current one
			answer = a[puzzleId]
		})
		if(id.length > 1 || puzzleId > 4)
			goto('/enter/')

		const waitimage = await fetch(`./enter/puzzle${puzzleId}.png`) //there should be a better way....
		loaded = true

		timeStore.useLocalStorage()
		if(!$timeStore.round2time[puzzleId] || $timeStore.round2time[puzzleId] === 0)
			$timeStore.round2time[puzzleId] = $currentTime.getTime()
		timeStarted = $timeStore.round2time[puzzleId]
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

	function revealHint(){
		// too lazy to hide in server....
		const hintStrings = [
			`ภาพที่เห็นเป็นส่วนหนึ่งของในงาน Thailand Board Game Show 2021 <br> 
			คุ้น ๆ กันไหมว่ามันอยู่ตรงไหนบ้าง? <br> 
			เติมคำในช่องว่าง แล้วลองเทียบตัวอักษรกับ EMOJI ดูสิ`,
			`4 อักษรงั้นเหรอ ทำไมเห็นแค่ 2 ล่ะ ?? <br> 
			อักษร 1 ตัว ค่อนข้างต่างไปจากพวกหน่อย <br>
			อักษรอีก 1 ตัวต้องมองทั้งกระดานถึงจะเห็น`,
			`เลข 4 ลากผ่านตัว E <br> 
			แต่เลข 2 ไม่ได้ลากผ่านตัว A`,
			`เพลงนี้เป็นเพลงที่คุณคุ้นเคยดีตอนเริ่มท่อง "อักษรภาษาอังกฤษ" <br> 
			เทียบเนื้อเพลงกับตัวโน้ตดูสิ <br>
			(ลองดีดเปียโนที่อยู่ข้าง ๆ อาจจะช่วยให้นึกชื่อเพลงออกได้นะ)`,
			`คุณไขปริศนาด่านที่ 1 รอบ ๆ งานครบแล้วหรือยัง? <br> 
			หากยัง คุณควรไปไขปริศนาให้ครบก่อน <br> 
			จากนั้นลองดูในตาราง 5x5 ของด่านที่ 1 จะมีตำแหน่งของตัวอักษรที่ยังไม่ได้ถูกใช้อยู่ <br> ส่วนภาพปริศนาในข้อนี้ 1 ช่องเท่ากับอักษรภาษาอังกฤษ 1 ตัว <br> คุณผ่านมาแล้วทั้งนั้นแหละคุ้นเคยกันดีไม่ยากใช่ไหมล่ะ !!`
		]
		snackbarLabel = hintStrings[puzzleId]
		snackbarWithClose.open()
	}

	function keyPressed(e){
   	if (e.keyCode === 13)
			submit();
  	}
</script>

{@debug timeStarted, timeLeft, $timeStore}

<Snackbar bind:this={snackbarWithClose}>
	<Label>{@html snackbarLabel}</Label>
	<Actions>
	  <IconButton class="material-icons" title="Dismiss">close</IconButton>
	</Actions>
 </Snackbar>

<div class='main'>
	{#if loaded}
		<img src={iconurl} style='max-height: 80vh' alt="puzzle"/>
	{/if}
	
	<span class='flex-row'>
		{#if puzzleId === 2}
			<a href='https://puzz.link/p?numlin/9/9/h1j32j4l5v67o2g4l7r3j165i' target='_blank'>คลิกที่นี่เพื่อเล่นบนเว็บ</a>
		{/if}
		<Textfield variant="outlined" bind:value={answer} on:keydown={keyPressed} disabled={solved}/>
		{#if solved}
			<Button variant="outlined" disabled>
				<Label>ถูกต้อง!</Label>
			</Button>
		{:else}
			<Button on:click={() => submit()} variant="raised">
				<Label>ส่งคำตอบ</Label>
			</Button>
			{#if timeLeft < 0}
				<Button on:click={() => revealHint()} variant="raised" color="secondary">
					<Label>ขอคำใบ้</Label>
				</Button>
			{:else}
				<Button disabled>
					<Label>คำใบ้จะปรากฏใน {timeLeftString} </Label>
				</Button>
			{/if}
		{/if}
	<span>
</div>