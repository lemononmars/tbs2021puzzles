<script lang=ts >
	import {store} from '../../stores/save'
	import {onMount} from 'svelte'
	import Textfield from '@smui/textfield'
	import Button, { Label } from '@smui/button';
	import IconButton from '@smui/icon-button';
	import {Facebook, Twitter} from 'svelte-share-buttons-component';

	let fburl = ''

	import Snackbar, {SnackbarComponentDev, Actions} from '@smui/snackbar';
	let snackbarWithClose: SnackbarComponentDev;
	let snackbarLabel = ''
	import io from 'socket.io-client';
	const socket = io()

	let solved = [false,false,false,false,false]
	const puzzleId = ['A', 'B', 'C', 'D']
	let answers = ['','','','','']
	$: numsolved = solved.filter(x => x).length
	let userInfo = {username: '', email: ''}
	let submitInfo = false
	let finalRanking = 0

	onMount(async() => {
		store.useLocalStorage()
		const submission = {round:1, answers: $store.round2answers}
		socket.emit('verify save', submission, function(s: boolean[], a: string[]){
			solved = s
			answers = a
		})
		submitInfo = solved[4]

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
				const hashEscape = '%23'
				if(id === 4) { //congratulatory message
					finalRanking = res.ranking
					fburl = `https://tbs2021puzzles.herokuapp.com/round1&display=popup&quote=แก้ปริศนาเสร็จเป็นคนที่ ${finalRanking}&hashtag=${hashEscape}tbs_2021`
				}
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
		var submission = {round:1, answer: answers[4], user: userInfo.username, email:userInfo.email} //submit final answer one more time
		socket.emit('add to leaderboard', submission, function(res){
			if(res.success) {
				snackbarLabel = 'บันทึกข้อมูลแล้ว'
				submitInfo = true
			}
			else {
				snackbarLabel = 'คำตอบไม่ถูกต้อง ลองตอบใหม่'
			}
			snackbarWithClose.open()
		})
	}
</script>

<Snackbar bind:this={snackbarWithClose}>
	<Label>{snackbarLabel}</Label>
	<Actions>
	  <IconButton class="material-icons" title="Dismiss">close</IconButton>
	</Actions>
 </Snackbar>

<div class = 'main'>
	{#if !solved[4]}
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
		<h2>ปริศนาข้อสุดท้าย</h2>
		<img src={'/enter/final.png'} style='max-height: 80vh; width: auto' alt="final puzzle"/>
		<span>
			<Textfield variant="outlined" bind:value={answers[4]} on:keydown={keyPressed} disabled={solved[4]}/>
			<Button on:click={() => submit(4)} variant="raised">
				<Label>ส่งคำตอบ</Label>
			</Button>
		</span>
		{/if}
	{:else}
		<div class='flex-column'>
			<h1>ยินดีด้วย!!!</h1>
			{#if !submitInfo}
				<Textfield variant="outlined" bind:value={userInfo.username} label="ชื่อใน gather.town" required/>
				<Textfield variant="outlined" bind:value={userInfo.email} label="email ที่ใช้สมัคร" required/>
				<Button on:click={submitFinal} variant="raised">
					<Label>ส่งข้อมูล</Label>
				</Button>
			{:else}
				เก็บข้อมูลเรียบร้อยแล้ว ตรวจสอบรายชื่อใน <Button href='/'><Label>ตารางอันดับ</Label></Button> ได้
			{/if}
		</div>
		<span>
			<Facebook class="share-button" url={fburl} />
			<Twitter class="share-button" text="แก้ปริศนาได้เป็นคนที่ {finalRanking} Thailand Board Game Show 2021 Puzzles" hashtags="tbs_2021,svelte"/>
		</span>
	{/if}
</div>