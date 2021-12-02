<script lang='ts'>
   import {onMount} from 'svelte'
   import CircularProgress from '@smui/circular-progress';
	import SegmentedButton, { Segment } from '@smui/segmented-button';
	import { Label } from '@smui/common';
   import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';

	import {round1, round2} from './_stats.json'

   let tables = [[],[]]
	let loaded = false
	
	var dateStringList = ["วันศุกร์", "วันเสาร์", "วันอาทิตย์", "วันอื่น"]
	var dateDigitList = [6,7,8]
	var selected = "วันเสาร์"
	$: selectedIndex = dateStringList.indexOf(selected)
	$: currentTables = getCurrentTables(selectedIndex)

	onMount(() => {
		tables[0] = round1.sort((a,b)=> {return a.time.localeCompare(b.time)})
		tables[1] = round2.sort((a,b)=> {return a.time.localeCompare(b.time)})
		currentTables = getCurrentTables(selectedIndex)
		loaded = true
	})

	function getCurrentTables(c: number){
		if(!currentTables)
			return [[],[]]

		var table1 = []
		var table2 = []
		if (c == 3) {// dates besides Fri, Sat, Sun. might have to be more generic in case of like 1/12
			table1 = tables[0].filter((e)=>!dateDigitList.includes(parseInt(e.time[1])))
			table2 = tables[1].filter((e)=>!dateDigitList.includes(parseInt(e.time[1])))
			return [table1, table2]
		}

		table1 = tables[0].filter(e=>parseInt(e.time[1]) == dateDigitList[c])
		table2 = tables[1].filter(e=>parseInt(e.time[1]) == dateDigitList[c])
		
		return [table1, table2]
	}
</script>
<main style='text-align:center'>
{#if loaded}
	<SegmentedButton segments={dateStringList} let:segment singleSelect bind:selected>
		<Segment {segment}>
		  <Label>{segment}</Label>
		</Segment>
	 </SegmentedButton>
	<span style='display:flex; justify-content:space-evenly; align-items:flex-start'>
	{#each currentTables as table, i}
		<div>
		<h1>ตารางอันดับด่านที่ {i+1} {selected}</h1>
		<DataTable table$aria-label="leaderboard" style="max-width: 100%;">
			<Head>
				<Row>
					<Cell>
						<span class="flex-row">
							<i class="material-icons" aria-hidden="true">emoji_events</i>
						</span>
					</Cell>
					<Cell>
						<span class="flex-row">
							<i class="material-icons" aria-hidden="true">person</i>
						</span>
					</Cell>
					<Cell style='text-align:center'>
						<span class="flex-row">
							<i class="material-icons" aria-hidden="true">schedule</i>
						</span>
					</Cell>
				</Row>
			</Head>
			{#if table.length > 0}
				<Body>
				{#each table as row, i}
				<Row>
					<Cell>{i+1}</Cell>
					<Cell>{decodeURI(row.name)}</Cell>
					<Cell>{row.time}</Cell>
				</Row>
				{/each}
				</Body>
			{/if}
		</DataTable>
		</div>
	{/each}
	</span>
{:else}
	<div style="display: flex; justify-content: center">
		<CircularProgress style="height: 32px; width: 32px;" indeterminate />
	</div>
{/if}
</main>