<script>
   import {onMount} from 'svelte'
   import CircularProgress from '@smui/circular-progress';
   import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
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

<h1>ตารางอันดับ</h1>

{#if loaded}
   {#if table.length > 0}
   <DataTable table$aria-label="leaderboard" style="max-width: 100%;">
      <Head>
         <Row>
            <Cell>
               <span style="display: flex; align-items: center;">
                  <i class="material-icons" aria-hidden="true">emoji_events</i>อันดับ
               </span>
            </Cell>
            <Cell>
               <span style="display: flex; align-items: center;">
                  <i class="material-icons" aria-hidden="true">person</i>ชื่อ
               </span>
            </Cell>
            <Cell>
               <span style="display: flex; align-items: center;">
                  <i class="material-icons" aria-hidden="true">schedule</i>เวลาที่ส่งคำตอบสุดท้าย
               </span>
            </Cell>
         </Row>
      </Head>
      <Body>
      {#each table as row, i}
      <Row>
         <Cell>{i+1}</Cell>
         <Cell>{row.name}</Cell>
         <Cell>{row.time}</Cell>
      </Row>
      {/each}
      </Body>
   </DataTable>
   {:else}
      <h2>ยังไม่มีใครไขได้ครบ... คุณอาจเป็นคนแรกก็ได้นะ</h2>
   {/if}
{:else}
   <div style="display: flex; justify-content: center">
      <CircularProgress style="height: 32px; width: 32px;" indeterminate />
   </div>
{/if}