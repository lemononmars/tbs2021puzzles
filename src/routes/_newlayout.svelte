<script lang='ts'>
	import NavStatic from '../components/NavStatic.svelte';
</script>

<style>
	main {
		position: relative;
		padding: 2em;
		margin-top: 50px;
	}
</style>

<NavStatic/>

<main>
	<slot></slot>
</main>


