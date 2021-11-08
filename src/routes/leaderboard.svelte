<script lang='ts'>
   import {onMount} from 'svelte'
   let table = []
   import io from 'socket.io-client';
   var loaded = false;
	const socket = io()

   onMount(async() => {
		socket.emit('get leaderboard', 1, function(result){
			table = result
         loaded = true
		})
	})
</script>

<svelte:head>
	<title>Leaderboard</title>
</svelte:head>

<h1>แท่นผู้ชนะ</h1>

{#if loaded}
   {#if table.length > 0}
   <table style="width:100%">
      <tr>
         <th>ลำดับ</th>
         <th>ชื่อ</th>
         <th>เวลา</th>
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
      <h2>ยังไม่มีใครไขได้ครบ... คุณอาจเป็นคนแรกก็ได้นะ</h2>
   {/if}
{:else}
   Loading...
{/if}

<style>
   h1{
      text-align:center;
   }
   th{
      text-align:center;
   }
   td{
      text-align:center;
   }
</style>