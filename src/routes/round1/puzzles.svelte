<script lang="ts">
	import Card, {Content, Actions,} from '@smui/card';
	import ClueTable from '../../components/ClueTable.svelte';
	import Select, { Option } from '@smui/select';
	import Button, { Label } from '@smui/button';

	let activePuzzle = 0
	let activeSection = 0
	const iconurls = [0,1,2,3,4,5].map(x => `./round1/puzzleicon${x+1}.png`)

	const sectionTitles = ['วิธีหาเบาะแส', 'วิธีแก้ปริศนา', 'วิธีอ่านคำตอบ']

	var puzzleTitles = [0,1,2,3,4].map(x => `ปริศนาข้อที่ ${x+1}`)
	puzzleTitles = [... puzzleTitles, `ปริศนาข้อสุดท้าย`]
	const puzzles = [
		[
			'หากลุ่มปลาที่ซ่อนอยู่ในทะเล ทั้งหมด 5 กลุ่ม แต่ละกลุ่มจะมี 1 ช่องที่มีทั้งปลาทั้งไฟ',
			'นำกลุ่มปลาทั้ง 5 กลุ่ม มาวางในตารางขนาด 5x5 ให้ทับทุกช่อง (เหมือนจิ๊กซอว์) โดยไม่ซ้อนทับกัน และไม่ต้องหมุน',
			'อ่านตัวอักษรที่ตำแหน่งตรงกับไฟ จะได้ตัวอักษร 5 ตัว เรียงจากบนลงล่าง'
		],
		[
			'หาช่องลับที่ซ่อนบนแผนที่ ที่เมื่อเดินไปเหยียบแล้วจะมีตัวเลข 0,1,2 และตัว ? โผล่ขี้นมา',
			'นำตัวเลขมาใส่ในตารางขนาด 5x5 จะได้ตารางเกม Minesweeper โดยให้หาว่าระเบิด 5 ลูกนั้น ซ่อนอยู่ในช่อง ? ช่องไหน',
			'อ่านตำแหน่งระเบิด จะได้ตัวอักษร 5 ตัว เรียงจากซ้ายไปขวา'
		],
		[
			'หากลุ่มใบเฟิร์น 5 กลุ่ม แต่ละกลุ่มจะมีใบเฟิร์นหลายช่องวางเรียงกัน',
			'แต่ละกลุ่ม จะมีช่องนึงที่ยืนทับแล้วมีอีโมจิขึ้นมา ให้หาว่าแทนความหมายอะไรในภาษาอังกฤษ (เช่น ❤️=HEART)',
			'อ่านตำแหน่งในช่องที่มีอีโมจิ จะได้ตัวอักษร 5 ตัว อ่านเรียงจากซ้ายไปขวา จะได้คำตอบสุดท้าย'
		],
		[
			'หาวิทยุ 5 ตัว',
			'เมื่อยืนใกล้วิทยุ จะได้คำใบ้ (ตัวอย่าง "วันพฤหัส (แถวที่ 2)") จากนั้นให้แปลงแต่ละคำให้เป็นตัวเลข 1-5',
			'อ่านตัวอักษรในแถวที่ระบุ และตำแหน่งที่ตรงกับตัวเลข จะได้ตัวอักษร 5 ตัว เรียงบนลงล่าง จะได้คำตอบสุดท้าย'
		],
		[
			'หาดาบทั้งหมด 5 คู่ ที่แต่ละคู่จะชี้เข้าหากัน',
			'เมื่อยืนบนช่องที่ดาบชี้เข้าหากัน จะเห็นตัวเลขขึ้นมา ให้นำตำแหน่งนั้นไปเทียบกับตำแหน่งในตาราง 5x5 โดยมองว่าดาบวางอยู่ที่ขอบตาราง',
			'อ่านตำแหน่งในช่องที่มีตัวเลข  จะได้ตัวอักษร 5 ตัว อ่านเรียงบนลงล่าง'
		],
		[
			'นำคำตอบที่ได้จากข้อ 1-5 มาอ่านเรียงกัน จะได้เป็นคำสั่ง',
			'ความหมายคือ "อ่านใต้ตัวอักษรในช่องที่ถูกหยิบสองครั้ง" โดยคำว่า "ช่อง" ในที่นี้หมายถึงช่องในตาราง 5x5',
			'อ่านตัวอักษรตามคำสั่ง จะได้ 5 ตัว เรียงจากซ้ายไปขวา จะได้คำตอบสุดท้าย'
		],
	]
</script>

<div id = 'main'>
	<ClueTable/>

	<h2>เลือกปริศนา</h2>
	<Select variant="outlined" bind:value={activePuzzle} on:SMUI:action={()=>(activeSection = 0)}>
		<Option value="0">เลือกปริศนา</Option>
		{#each [1,2,3,4,5,6] as id}
			<Option value={id}> 
				<img src={iconurls[id-1]} alt='puzzle icon'/> {puzzleTitles[id-1]}
			</Option>
		{/each}
	</Select>
 {#if activePuzzle > 0}
 	<div class="card-display" style='width:100%'>
		<div class="card-container">
			<Card>
				<Content>
					<span><img src={iconurls[activePuzzle-1]} alt='puzzle icon'/> {puzzleTitles[activePuzzle-1]}</span>
				</Content>
				{#each sectionTitles as title, i}
					{#if activeSection >= i}
					<Actions fullBleed>
						<Button on:click={() => activeSection=i+1}>
							<Label><h2>{title}</h2></Label>
							<i class="material-icons" aria-hidden="true">expand_more</i>
						</Button>
					</Actions>
					{/if}
					{#if activeSection > i}
					<Content>{@html puzzles[activePuzzle-1][i]}</Content>
					{/if}
				{/each}
			</Card>
		</div>
	</div>
 {/if}
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