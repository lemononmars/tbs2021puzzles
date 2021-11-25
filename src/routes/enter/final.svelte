<script lang=ts >
	import {store, currentTime} from '../../stores/save'
	import {onMount} from 'svelte'
	import Textfield from '@smui/textfield'
	import Button, { Label } from '@smui/button';
	import IconButton from '@smui/icon-button';
	import { goto } from "@sapper/app";

	import Snackbar, {SnackbarComponentDev, Actions} from '@smui/snackbar';
	let snackbarWithClose: SnackbarComponentDev;
	let snackbarLabel = ''
	import io from 'socket.io-client';
	const socket = io()

	let solved = [false,false,false,false,false]
	const puzzleId = ['A', 'B', 'C', 'D']
	let answers = ['','','','','']
	$: numsolved = solved.filter(x => x).length
	$: if(numsolved == 4 && (!$store.round2time[4] || $store.round2time[4] === 0)){
		$store.round2time[4] = $currentTime.getTime()
		timeStarted = $store.round2time[4]
	}

	let timeStarted = 0
	let waitTime = 1800000 // 30 minutes = 1200000
	$: timeLeft = Math.max(waitTime - $currentTime.getTime() + timeStarted, 0)
	$: timeMinuteString = timeLeft <= 0 || Math.floor(timeLeft / 60000) === 0? '':`${Math.floor(timeLeft / 60000)} นาที`
	$: timeLeftString = timeLeft <= 0? '0': `${timeMinuteString} ${Math.floor((timeLeft % 60000)/1000)} วินาที`

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
		var submission = {round: 1, id:id, answer: answers[id], alias: $store.alias}

		socket.emit('submit answer', submission, function(res){
			if(res.isCorrect) {
				answers[id] = answers[id].trim().toUpperCase()
				$store.round2answers[id] = answers[id]
				solved[id] = true
				if (res.isFinished) {
					goto(`/enter/${answers[id]}/`)
				}
			}	
			snackbarLabel = res.message
			snackbarWithClose.open()
		})
	}

	function keyPressed(e){
   	if (e.keyCode === 13)
			submit(answers.indexOf(e.target.value));
  	}

	function revealHint(){
		const hintString = 
			`คุณไขปริศนาด่านที่ 1 รอบ ๆ งานครบแล้วหรือยัง? <br> 
			หากยัง คุณควรไปไขปริศนาให้ครบก่อน <br> 
			จากนั้นลองดูในตาราง 5x5 ของด่านที่ 1 จะมีตำแหน่งของตัวอักษรที่ยังไม่ได้ถูกใช้อยู่ <br> ส่วนภาพปริศนาในข้อนี้ 1 ช่องเท่ากับอักษรภาษาอังกฤษ 1 ตัว <br> คุณผ่านมาแล้วทั้งนั้นแหละคุ้นเคยกันดีไม่ยากใช่ไหมล่ะ !!`
		snackbarLabel = hintString
		snackbarWithClose.open()
	}
</script>

<Snackbar bind:this={snackbarWithClose}>
	<Label>{@html snackbarLabel}</Label>
	<Actions>
	  <IconButton class="material-icons" title="Dismiss">close</IconButton>
	</Actions>
 </Snackbar>

<div class = 'main'>
	{#if numsolved < 4}
		<h2>ตอบปริศนาในห้องนี้ทั้ง 4 ข้อให้ครบ แล้วปริศนาข้อสุดท้ายจะปรากฎขึ้นมา</h2>
		{#each [0,1,2,3] as index}
			<span class='flex-row'>
				Puzzle {puzzleId[index]}
				<Textfield variant="outlined" bind:value={answers[index]} on:keydown={keyPressed} disabled={solved[index]}/>
				{#if solved[index]}
					<Button variant="outlined" disabled>
						<Label>ตอบแล้ว</Label>
					</Button>
				{:else}
					<Button on:click={() => submit(index)} variant="raised">
						<Label>ยังไม่ตอบ</Label>
					</Button>
				{/if}
			</span>
		{/each}
	{:else}
		<img src={'/enter/final.png'} style='max-height: 70vh; width: auto' alt="final puzzle"/>
		<span>
			<Textfield variant="outlined" bind:value={answers[4]} on:keydown={keyPressed} disabled={solved[4]}/>
			{#if !solved[4]}
				<Button on:click={() => submit(4)} variant="raised">
					<Label>ส่งคำตอบ</Label>
				</Button>
			{:else}
				<Button variant="raised" disabled>
					<Label>ถูกต้อง</Label>
				</Button>
			{/if}
			{#if timeLeft <= 0}
				<Button on:click={() => revealHint()} variant="raised" color="secondary">
					<Label>ขอคำใบ้</Label>
				</Button>
			{:else}
				<Button disabled>
					<Label>คำใบ้จะปรากฏใน {timeLeftString} </Label>
				</Button>
			{/if}
		</span>
	{/if}
</div>