<script lang="ts">
	import Card, {Content, Actions} from '@smui/card';
	import Button, { Label } from '@smui/button';
	import Drawer, {AppContent} from '@smui/drawer';
	import List, { Item, Text} from '@smui/list';
	import ClueTable from '../../components/ClueTable.svelte';
	import Textfield from '@smui/textfield'
	import IconButton from '@smui/icon-button';
	import Dialog, { Title, Content, Actions } from '@smui/dialog';
	let dialogOpen = false;
	import Snackbar, {SnackbarComponentDev,} from '@smui/snackbar';
	let snackbarWithClose: SnackbarComponentDev;
	let snackbarLabel = ''

	import RatingButton from '../../components/RatingButton.svelte'
	import {store, currentTime} from '../../stores/save'
	import {onMount} from 'svelte'
	import io from 'socket.io-client';
	const socket = io()

	let solved = [false, false, false, false, false, false]
	let answers = [' ',' ',' ',' ',' ',' ']

	onMount(async() => {
		store.useLocalStorage()
		const submission = {round:0, answers: $store.round1answers}
		socket.emit('verify save', submission, function(s: boolean[], a: string[]){
			solved = s
			answers = a
		})

		const res = await fetch(`./round1/puzzleicon1.png`) //there should be a better way....
	})

	let activeDrawer = 0
	$: activePuzzle = activeDrawer-1
	let activeSection = 0
	const iconurls = [0,1,2,3,4,5].map(x => `./round1/puzzleicon${x+1}.png`)
	const sectionTitles = ['วิธีหาข้อมูล', 'วิธีแก้ปริศนา', 'วิธีอ่านคำตอบ']

	var puzzleTitles = [0,1,2,3,4].map(x => `ปริศนาข้อที่ ${x+1}`)
	puzzleTitles = ['วิธีเล่น',... puzzleTitles, 'ปริศนาข้อสุดท้าย']
	const puzzles = [
		[ 	
			`<ul> <li>หาคำใบ้ในงาน Thailand Board Game Show 2021 เท่านั้น ไม่ต้อง Google หาข้อมูล</li>
					<li>ใช้ตารางตัวอักษร 5x5 (ด้านบน) สำหรับปริศนาทั้ง 5 ข้อ</li> </ul>`,
			`<ul> <li>วิเคราะห์ข้อมูลที่ได้มา ว่าจะแก้ปริศนาอย่างไร</li> <li>ถ้าแก้ปริศนาถูก จะได้ตำแหน่งในตาราง 5 ช่อง เป็นตัวอักษร 5 ตัว</li></ul>`,
			`<ul> <li>อ่านตัวอักษร 5 ตัวนั้น บนลงล่าง หรือซ้ายไปขวา อย่างใดอย่างหนึ่ง จะได้คำตอบของข้อนั้น </li> <li> นำคำตอบไปใส่ในช่องด้านบน และกด 'ส่งคำตอบ'</li></ul>`
		],
		[
			'หากลุ่มปลาที่ซ่อนอยู่ในทะเล ทั้งหมด 5 กลุ่ม แต่ละกลุ่มจะมี 1 ช่องที่มีทั้งปลาทั้งไฟ',
			'นำกลุ่มปลาทั้ง 5 กลุ่ม มาวางในตารางขนาด 5x5 ให้ทับทุกช่อง (เหมือน Tetris) โดยไม่ซ้อนทับกัน และไม่ต้องหมุน',
			'อ่านตัวอักษรที่ตำแหน่งตรงกับไฟ จะได้ตัวอักษร 5 ตัว เรียงจากบนลงล่าง'
		],
		[
			'หาช่องลับที่ซ่อนบนแผนที่ ใน Brick Zone ที่เมื่อเดินไปเหยียบแล้วจะมีตัวเลข 0,1,2 และตัว 💣? โผล่ขี้นมา',
			'นำตัวเลขมาใส่ในตารางขนาด 5x5 จะได้ตารางเกม Minesweeper โดยให้หาว่าระเบิด 5 ลูกนั้น ซ่อนอยู่ในช่อง ? ช่องไหน',
			'อ่านตำแหน่งระเบิด จะได้ตัวอักษร 5 ตัว เรียงจากซ้ายไปขวา'
		],
		[
			'หากลุ่มใบเฟิร์น 5 กลุ่ม แต่ละกลุ่มจะมีใบเฟิร์นหลายช่องวางเรียงกัน',
			`แต่ละกลุ่ม จะมีช่องนึงที่ยืนทับแล้วมีอีโมจิขึ้นมา ให้หาว่าแทนความหมายอะไรในภาษาอังกฤษ (เช่น ❤️=HEART) และหาว่าอยู่ส่วนใดของตาราง โดยให้อ่านเป็นเส้นตรงจากด้านหนึ่งไปอีกด้านนึง<br><img src="./round1/puzzle3hint.png"/>`,
			'อ่านตำแหน่งในช่องที่มีอีโมจิ จะได้ตัวอักษร 5 ตัว อ่านเรียงจากซ้ายไปขวา จะได้คำตอบสุดท้าย'
		],
		[
			'หาวิทยุ 5 ตัว',
			'เมื่อยืนใกล้วิทยุ จะได้คำใบ้ (ตัวอย่าง "แถวที่ 1: มีชู้ = #") โดย # หมายถึงตัวเลข',
			'อ่านตัวอักษรในแถวที่ระบุ และตำแหน่งที่ตรงกับตัวเลข จะได้ตัวอักษร 5 ตัว เรียงบนลงล่าง จะได้คำตอบสุดท้าย'
		],
		[
			'หาดาบทั้งหมด 5 คู่ ที่แต่ละคู่จะชี้เข้าหากัน',
			`วางดาบแต่ละคู่ที่ขอบตาราง 5x5 ด้านนอก ดาบจะบอกพิกัดของตัวอักษรในตาราง 5x5 <br><img src="./round1/puzzle5hint.png"/>`,
			'อ่านตัวอักษรในพิกัดทั้ง 5 ช่อง จะได้ตัวอักษร 5 ตัว อ่านเรียงบนลงล่าง'
		],
		[
			'นำคำตอบที่ได้จากข้อ 1-5 มาอ่านเรียงกัน จะได้เป็นคำสั่ง',
			'ความหมายคือ "ดูใต้ช่องที่ถูกใช้สองครั้ง" โดยให้ดูว่าคำตอบในข้อ 1-5 ใช้ช่องไหนไปบ้าง',
			'อ่านตัวอักษรตามคำสั่ง จะได้ 5 ตัว เรียงจากซ้ายไปขวา จะได้คำตอบสุดท้าย'
		],
	]

	let ranking = -1
	let user = ''
	let timeTotal = 0
	let timeTotalString = ''
	
	function submit(id: number){
		var submission = {round: 0, id:id, answer: answers[id], alias: $store.alias}
		socket.emit('submit answer', submission, function(res){
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
		})
	}

	function submitFinal(){
		if($store.round1final){
			snackbarLabel = `คุณเคยส่งชื่อแล้ว!!!`
			snackbarWithClose.open()
			return
		}

		var submission = {
			round:0, 
			answer: answers[5], 
			alias: $store.alias,
			user: user, 
			email: 'none',
			timeTotal: timeTotal
		} //submit final answer one more time
		socket.emit('add to leaderboard', submission, function(res){
			if(res.success) {
				dialogOpen = false
				ranking = res.ranking
				$store.round1final = true
				snackbarLabel = `บันทึกข้อมูลแล้ว คุณได้ลำดับที่ ${ranking}`
			}
			else {
				snackbarLabel = 'คำตอบไม่ถูกต้อง ลองตอบใหม่'
			}
			snackbarWithClose.open()
		})
	}

	function submitRates(event){
		socket.emit('submit rating', event.detail)
		$store.round1rate[event.detail.puzzleId] = true
		snackbarLabel = 'ขอบคุณสำหรับคะแนนครับ'
		snackbarWithClose.open()
	}

	function keyPressed(e){
   	if (e.keyCode === 13)
			submit(answers.indexOf(e.target.value));
  	};
	function setActive(act: number){
		activeDrawer = act
		activeSection = 0
	}
</script>

<div class = 'main'>
	<ClueTable/>
	<div class="drawer-container">
		<Drawer>
		  <Content>
			 <List>
				{#each Array(7) as _unused, id}
				<Item
				  href="javascript:void(0)"
				  on:click={() => setActive(id)}
				  activated={activeDrawer === id}
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
					{#if activeDrawer > 0}
						<span class='flex-row'>
							<img src={iconurls[activePuzzle]} alt = 'puzzle icon'/>
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
								{/if}
						</span>
						
						{#if solved[activePuzzle] && !$store.round1rate[activePuzzle]}
							<span style="text-align:center">
								<RatingButton anchor={"BOTTOM_LEFT"} puzzleId={activePuzzle} round={0} on:submitRates={submitRates}/>
							</span>
						{/if}
					{/if}
					{#each sectionTitles as title, i}
						{#if activeSection >= i}
						<Actions fullBleed>
							<Button on:click={() => activeSection+=(activeSection <= i?1: 0)}>
								<Label><h2>{title}</h2></Label>
								<i class="material-icons" aria-hidden="true">expand_more</i>
							</Button>
						</Actions>
						{/if}
						{#if activeSection > i}
						<Content>{@html puzzles[activeDrawer][i]}</Content>
						{/if}
					{/each}
				</Card>
				</div>
			</div>
		</AppContent>
	</div>
</div>

<Snackbar bind:this={snackbarWithClose}>
	<Label>{snackbarLabel}</Label>
	<Actions>
	  <IconButton class="material-icons" title="Dismiss">close</IconButton>
	</Actions>
 </Snackbar>
 
<Dialog 
bind:open={dialogOpen} aria-labelledby="simple-title" aria-describedby="simple-content"
scrimClickAction=""
escapeKeyAction=""
>
	<Title id="simple-title">🎉ขอแสดงความยินดี🎉</Title>
	<Content id="simple-content">
		<div>
			คุณใช้เวลาทั้งสิ้น {timeTotalString} <br><br>
			นำคำตอบ {answers[5]} ไปใส่ในประตูในงาน เพื่อไปด่านต่อไป<br><br>
			โปรดใส่ชื่อเพื่อแสดงในตารางอันดับ<br>
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
	.drawer-container {
	  position: relative;
	  display: flex;
	  height: 600px;
	  width: clamp(400px, 90%, 900px);
	  border: 1px solid
		 var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
	  overflow: auto;
	  z-index: 0;
	}

	.main-content {
    overflow: auto;
    padding: 10px;
	 width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  .card-container{
	  width: 470px
  }
</style>