<script>
  import Button, { Label, Icon } from '@smui/button';
  import Tooltip, {Wrapper} from '@smui/tooltip';

	const letterTable = [
		['U','H','T','L','R'],
		['W','E','T','A','R'],
		['A','N','D','K','I'],
		['C','N','D','E','S'],
		['E','N','L','E','S']
	]
	var letterStates = [
		[0,0,0,0,0],
		[0,0,0,0,0],
		[0,0,0,0,0],
		[0,0,0,0,0],
		[0,0,0,0,0],
	]
	var stateColors = ['primary', 'secondary']
	var showTable = true
	var toggleButtonText =['ซ่อนตาราง', 'แสดงตาราง']
	
	function flipState(i,j){
		letterStates[i][j] = (letterStates[i][j] + 1) % stateColors.length // TODO: 3 states?
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
</script>
<div style="display:flex; flex-direction: column; justify-content: center">
	<table hidden={!showTable}>
		{#each letterTable as row, i}
			<tr>
			{#each row as l, j}
			<td>
				<Button value='true' style='font-size:30px;' on:click={()=>flipState(i,j)} color={stateColors[letterStates[i][j]]} variant="outlined">
				<Label>{l}</Label>
				</Button>
			</td>
			{/each}
			</tr>
		{/each}
	</table>
	<span style="display: flex; align-items: center; justify-content: center">
		<Button on:click={()=>showTable = !showTable} color='secondary'>
			<Icon class="material-icons" aria-hidden="true">visibility</Icon>
			<Label>{toggleButtonText[+!showTable]}</Label>
		</Button>
		<Button on:click={clearMarks} color='secondary'>
			<Icon class="material-icons" aria-hidden="true">restart_alt</Icon>
			<Label>รีเซ็ตตาราง</Label>
		</Button>
		<Wrapper>
			<i class="material-icons" aria-hidden="true">info</i>
			<Tooltip>ปุ่มในตารางมีไว้ช่วยทด ไม่ต้องกดใช้ส่งคำตอบ</Tooltip>
		</Wrapper>
	</span>
</div>