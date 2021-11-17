<script lang="ts">
	import Card, {Content, Actions} from '@smui/card';
	import Button, { Label } from '@smui/button';
	import Drawer, {AppContent} from '@smui/drawer';
	import List, { Item, Text} from '@smui/list';
	import {store} from '../../stores/save'
	import {onMount} from 'svelte'
	import ClueTable from '../../components/ClueTable.svelte';
	import Textfield from '@smui/textfield'
	import IconButton from '@smui/icon-button';
	import Dialog, { Title, Content, Actions } from '@smui/dialog';
	let dialogOpen = false;
	import Snackbar, {SnackbarComponentDev,} from '@smui/snackbar';
	let snackbarWithClose: SnackbarComponentDev;
	let snackbarLabel = ''
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

	let activePuzzle = 0
	let activeSection = 0
	const iconurls = [0,0,1,2,3,4,5].map(x => `./round1/puzzleicon${x+1}.png`)

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
			'หาช่องลับที่ซ่อนบนแผนที่ ที่เมื่อเดินไปเหยียบแล้วจะมีตัวเลข 0,1,2 และตัว 💣? โผล่ขี้นมา',
			'นำตัวเลขมาใส่ในตารางขนาด 5x5 จะได้ตารางเกม Minesweeper โดยให้หาว่าระเบิด 5 ลูกนั้น ซ่อนอยู่ในช่อง ? ช่องไหน',
			'อ่านตำแหน่งระเบิด จะได้ตัวอักษร 5 ตัว เรียงจากซ้ายไปขวา'
		],
		[
			'หากลุ่มใบเฟิร์น 5 กลุ่ม แต่ละกลุ่มจะมีใบเฟิร์นหลายช่องวางเรียงกัน',
			'แต่ละกลุ่ม จะมีช่องนึงที่ยืนทับแล้วมีอีโมจิขึ้นมา ให้หาว่าแทนความหมายอะไรในภาษาอังกฤษ (เช่น ❤️=HEART) และหาว่าอยู่ส่วนใดของตาราง',
			'อ่านตำแหน่งในช่องที่มีอีโมจิ จะได้ตัวอักษร 5 ตัว อ่านเรียงจากซ้ายไปขวา จะได้คำตอบสุดท้าย'
		],
		[
			'หาวิทยุ 5 ตัว',
			'เมื่อยืนใกล้วิทยุ จะได้คำใบ้ (ตัวอย่าง "แถวที่ 1: มีชู้ = #") โดย # หมายถึงตัวเลข',
			'อ่านตัวอักษรในแถวที่ระบุ และตำแหน่งที่ตรงกับตัวเลข จะได้ตัวอักษร 5 ตัว เรียงบนลงล่าง จะได้คำตอบสุดท้าย'
		],
		[
			'หาดาบทั้งหมด 5 คู่ ที่แต่ละคู่จะชี้เข้าหากัน',
			'มองว่าดาบอยู่ขอบตาราง 5x5 ดาบจะบอกพิกัดของตัวอักษรในตาราง 5x5',
			'อ่านตัวอักษรในพิกัดทั้ง 5 ช่อง จะได้ตัวอักษร 5 ตัว อ่านเรียงบนลงล่าง'
		],
		[
			'นำคำตอบที่ได้จากข้อ 1-5 มาอ่านเรียงกัน จะได้เป็นคำสั่ง',
			'ความหมายคือ "ดูใต้ช่องที่ถูกใช้สองครั้ง" โดยให้ดูว่าคำตอบในข้อ 1-5 ใช้ช่องไหนไปบ้าง',
			'อ่านตัวอักษรตามคำสั่ง จะได้ 5 ตัว เรียงจากซ้ายไปขวา จะได้คำตอบสุดท้าย'
		],
	]

	let ranking = -1
	function submit(id: number){
		var submission = {round: 0, id:id, answer: answers[id]}
		socket.emit('submit answer', submission, function(res){
			if(res.isCorrect) {
				answers[id] = answers[id].trim().toUpperCase()
				$store.round1answers[id] = answers[id]
				solved[id] = true
				snackbarLabel = 'ถูกต้อง!✔️'
				if(res.isFinished){
					dialogOpen = true
				}
			}	
			else{
				snackbarLabel = 'ยังไม่ถูก❌'
			}
			snackbarWithClose.open()
		})
	}

	let user = ''
	function submitFinal(){
		var submission = {round:0, answer: answers[5], user: user, email: 'none'} //submit final answer one more time
		socket.emit('add to leaderboard', submission, function(res){
			if(res.success) {
				dialogOpen = false
				ranking = res.ranking
				snackbarLabel = `บันทึกข้อมูลแล้ว คุณได้ลำดับที่ ${ranking}`
				snackbarWithClose.open()
			}
			else {
				snackbarLabel = 'คำตอบไม่ถูกต้อง ลองตอบใหม่'
				snackbarWithClose.open()
			}
		})
	}

	function keyPressed(e){
   	if (e.keyCode === 13)
			submit(answers.indexOf(e.target.value));
  	};
	function setActive(act: number){
		activePuzzle = act
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
				  activated={activePuzzle === id}
				>
					<Text>{puzzleTitles[id]}</Text>
				</Item>
				{/each}
			 </List>
		  </Content>
		</Drawer>
	  
		<AppContent class="app-content">
		  <main class="main-content">
				<div class="card-display" style='width:100%'>
					<div class="card-container">
						<Card>
							{#if activePuzzle > 0}
								<span class='flex-row'>
									<img src={iconurls[activePuzzle]} alt = 'puzzle icon'/>
									<Textfield 
										variant="outlined" 
										bind:value={answers[activePuzzle-1]} 
										on:keydown={keyPressed} 
										disabled={solved[activePuzzle-1]}
									/>
										{#if solved[activePuzzle-1]}
											<Button variant="outlined" disabled>
												<Label>ถูกต้อง!</Label>
											</Button>
										{:else}
											<Button on:click={() => submit(activePuzzle-1)} variant="raised">
												<Label>ส่งคำตอบ</Label>
											</Button>
										{/if}
								</span>
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
								<Content>{@html puzzles[activePuzzle][i]}</Content>
								{/if}
							{/each}
						</Card>
					</div>
				</div>
		  </main>
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
<Title id="simple-title">🎉ขอแสดงความยินดีด้วย🎉</Title>
<Content id="simple-content">
	<div>
		นำคำตอบ {answers[5]} ไปใส่ในประตู เพื่อไปด่านต่อไป<br><br>
		ใส่ชื่อเพื่อแสดงในตารางอันดับ<br>
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
	  height: 380px;
	  border: 1px solid
		 var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
	  overflow: hidden;
	  z-index: 0;
	}

	.main-content {
    overflow: auto;
    padding: 10px;
    height: 100%;
	 width: clamp(300px, 600px, 600px);
    box-sizing: border-box;
  }
</style>