<script>
   import {onMount} from 'svelte'
   //import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
   let table = []
   import io from 'socket.io-client';
	const socket = io()

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

<h1>Leaderboard</h1>
{#if table.length > 0}
<table>
   <tr>
      <th>Rank</th>
      <th>Name</th>
      <th>Time</th>
   </tr>
   {#each table as row, i}
   <tr>
      <td>{i+1}</td>
      <td>{row.name}</td>
      <td>{row.time}</td>
   </tr>
   {/each}
</table>
{:else}
   <h2>No one has finished yet. You could be first!</h2>
{/if}

<!--
<DataTable table$aria-label="People list" style="max-width: 100%;">
   <Head>
     <Row>
       <Cell>#</Cell>
       <Cell>Name</Cell>
       <Cell>Time</Cell>
     </Row>
   </Head>
   <Body>
      {#each table as row}
      <Row>
         <Cell numeric>{row[0]}</Cell>
         <Cell>{row[1]}</Cell>
         <Cell>{row[2]}</Cell>
      </Row>
      {/each}
   </Body>
 </DataTable>
 -->