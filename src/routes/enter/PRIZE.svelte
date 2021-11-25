<script lang=ts >
	import {store, currentTime} from '../../stores/save'
	import { goto } from "@sapper/app";

	import {onMount} from 'svelte'
	import Textfield from '@smui/textfield'
	import Button, { Label } from '@smui/button';
	import {Facebook, Twitter} from 'svelte-share-buttons-component';

	let fburl = ''
	let twitterText = ''
	let finalImpression = ''
	let finalImpressionSubmitted = false

	import io from 'socket.io-client';
	const socket = io()

	let userInfo = {username: '', email: ''}
	let finalAnswer = ''
	let timeTotalString = ''

	onMount(async() => {
		store.useLocalStorage()
		const submission = {round:1, answers: $store.round2answers}
		socket.emit('verify save', submission, function(s: boolean[], a: string[]){
			if(!s[4])
				goto('/enter/final')
			finalAnswer = a[4]
		})

		if($store.timeTotal <= 0)
			$store.timeTotal = $currentTime.getTime() - $store.timeStarted
		timeTotalString = `${Math.floor($store.timeTotal / 60000)} นาที ${Math.floor(($store.timeTotal % 60000)/1000)} วินาที`
	})

	function submitFinal(){
		var submission = {
			round: 1, 
			answer: finalAnswer, 
			user: userInfo.username, 
			email:userInfo.email,
			alias: $store.alias,
			timeTotal: $store.timeTotal
		}
		socket.emit('add to leaderboard', submission, function(res){
			if(res.success) {
				$store.round2final = true
				$store.finalRanking = res.ranking
				const hashEscape = '%23'
				fburl = `https://tbs2021puzzles.herokuapp.com/round1&display=popup&quote=แก้ปริศนาเสร็จเป็นคนที่ ${$store.finalRanking} ใช้เวลา ${timeTotalString}`
				twitterText = `แก้ปริศนาได้เป็นคนที่ ${$store.finalRanking} ใช้เวลา ${$store.timeTotal} Thailand Board Game Show 2021 Puzzles`
			}
		})
	}

	function submitFinalImpression(){
		finalImpressionSubmitted = true
		socket.emit('submit impression', finalImpression)
	}
</script>

<div class = 'main'>
	<div class='flex-column'>
		<h1>🎉คุณคือผู้พิชิตปริศนา TBS2021🎉</h1>
		{#if !$store.round2final}
			กรอกข้อมูลเพื่อรับของที่ระลึก
			<Textfield variant="outlined" bind:value={userInfo.username} label="ชื่อใน gather.town" required/>
			<Textfield variant="outlined" bind:value={userInfo.email} label="email ที่ใช้สมัคร" input$autocomplete="email" required/>
			<Button on:click={submitFinal} variant="raised">
				<Label>ส่งข้อมูล</Label>
			</Button>
		{:else}
			เก็บข้อมูลเรียบร้อยแล้ว! คุณได้ลำดับที่ {$store.finalRanking} <br>
			ใช้เวลาทั้งหมด (รวมด่านแรก) {timeTotalString} <br><br>
			แชร์ให้คนอื่นรู้ว่าเราเล่นจบแล้ว!
			<span>
				<Facebook class="share-button" url={fburl} />
				<Twitter class="share-button" text={twitterText} hashtags="tbs_2021, codebreaker_thailand"/>
			</span>
			
			{#if !finalImpressionSubmitted}
				<Textfield
					textarea
					bind:value={finalImpression}
					label="อยากบอกอะไรผู้ประดิษฐ์ปริศนาบ้าง"
					input$rows={4}
					input$cols={40}
				/>
				<Button on:click={submitFinalImpression} variant="raised">
					<Label>ส่งข้อมูล</Label>
				</Button>
			{:else}
				<h2>ขอบคุณครับ แล้วมาแก้ปริศนาด้วยกันใหม่ในโอกาสหน้า 😉</h2>
			{/if}
		{/if}
	</div>
</div>