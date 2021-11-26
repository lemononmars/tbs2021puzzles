<script>
   import {onMount} from 'svelte'
   import CircularProgress from '@smui/circular-progress';
   import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
   let tables = [[],[]]
   import io from 'socket.io-client';
   var loaded = false;
	const socket = io()

	var numActivePlayers = 0

   onMount(async() => {
		socket.emit('get leaderboard', 1, function(result){
			tables[0] = result.sort((a,b)=> {return a.time.localeCompare(b.time)})
         loaded = true
		})
		socket.emit('get leaderboard', 2, function(result){
			tables[1] = result.sort((a,b)=> {return a.time.localeCompare(b.time)})
         loaded = true
		})
		socket.emit('get number active players', '', function(num){
			numActivePlayers = num
		})
	})
</script>

<main style='text-align:center'>
<img src="./logo-192.png/" alt="Thailand Board Game Show logo"/><br/>
{#if loaded}
	<span>ขณะนี้มีคนเล่นทั้งหมด {numActivePlayers} คน </span><br>
	<span>ถ้าหาชื่อของตัวเองไม่เจอ กรุณาติดต่อ codebreakerth (at) gmail.com</span>
	<span style='display:flex; justify-content:space-evenly; align-items:flex-start'>
	{#each tables as table, i}
		<div>
		<h1>ตารางอันดับด่านที่ {i+1}</h1>
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
					<Cell>{row.name}</Cell>
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