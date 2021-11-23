<script type='ts'>
	import Star from './Star.svelte';
   import { createEventDispatcher } from 'svelte';
   const dispatch = createEventDispatcher();
	export var type: Number;
   export var title: String;
   export var starTitle: Array<string>
   let stars = [1,2,3,4,5]
	let rating = null;
	let hoverRating = null;
	
	const handleHover = (id) => () => {
		hoverRating = id;
	}
	const handleRate = (id) => (event) => {
		rating = id;
      dispatch('rate', {
         type: type,
         rating: rating
      })
	}
	
</script>

<span>
   {title}: 
   {#if hoverRating}
      {starTitle[hoverRating-1]}
   {:else if rating}
      {starTitle[rating-1]}
   {/if}
</span>


<span class="starContainer">
   {#each stars as star}
      <Star 
            filled={hoverRating ? (hoverRating >= star) : (rating >= star)} 
            starId={star}
            on:mouseover={handleHover(star)} 
            on:mouseleave={() => hoverRating = null}
            on:click={handleRate(star)}
         />
   {/each}
</span>


<style>
	.starContainer {
		display: inline-block;
      width: 180px;
		transition: background .2s ease-out;
		border-radius: 8px;
		padding: 4px 6px 0;
	}
	.starContainer:hover {
		background: #efefef;
	}
</style>