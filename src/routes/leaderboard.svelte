<script lang='ts'> 
   import {onMount} from 'svelte'
   import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
   let table = []
   import {io, Socket} from 'socket.io-client';
	const socket: Socket = io()

   onMount(async() => {
      // retrieve leaderboard from database
		socket.emit('get leaderboard', 1, function(result){ // 1 = first half
			table = result
		})
	})
</script>

<svelte:head>
	<title>Leaderboard</title>
</svelte:head>

{#if table.length > 0}
<DataTable table$aria-label="Leaderboard" style="max-width: 100%;">
   <Head>
     <Row>
       <Cell>ลำดับ</Cell>
       <Cell>ชื่อ</Cell>
       <Cell>เวลา</Cell>
     </Row>
   </Head>
   <Body>
      {#each table as row, i}
      <Row>
         <Cell numeric>{i}</Cell>
         <Cell>{row.name}</Cell>
         <Cell>{row.time}</Cell>
      </Row>
      {/each}
   </Body>
 </DataTable>
 {:else}
   <h2>ยังไม่มีคนเสร็จเลย คุณอาจเป็นคนแรกก็ได้นะ!</h2>
  {/if}
