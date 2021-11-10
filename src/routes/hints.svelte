<script lang="ts">
	import List, { Item, Separator, Text } from '@smui/list';
</script>

<svelte:head>
	<title>คำใบ้</title>
</svelte:head>

<div>
	<List class="demo-list">
		{#each [0,1,2,3,4,5].map(x => `./puzzleicon${x+1}.png`) as it}
	  		<Item><img src={it} alt = 'puzzle icon'/></Item>
		{/each}
	</List>
 </div>