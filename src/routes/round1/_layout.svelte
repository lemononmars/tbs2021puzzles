<script lang='ts'>
	import Nav from '../../components/Nav.svelte';
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color:white;
		padding: 2em;
		margin: auto;
		margin-top: 50px;
		box-sizing: border-box;
	}
</style>

<Nav/>

<main>
	<slot></slot>
</main>


