<script lang="ts">
   import StarRatings from './StarRatings.svelte';
   import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
   import MenuSurface, {MenuSurfaceComponentDev} from '@smui/menu-surface';
   import Button from '@smui/button';
   export var puzzleId: Number
   export var round: Number
   export var anchor
  
   let menu: MenuSurfaceComponentDev;
   let rates = [0,0]
   let rated = false

   const funRating = {
      type: 0,
      title: 'ความสนุก',
      starTitle: ['น่าเบื่อ','เฉย ๆ','ใช้ได้','สนุก','มันส์มาก']
   }
   const difficultyRating = {
      type: 1,
      title: 'ความยาก',
      starTitle: ['หลับตาทำได้','ชิว ๆ','ปานกลาง','หัวอุ่น','หัวระเบิด']
   }

   function rate(event) {
      rates[event.detail.type] = event.detail.rating
   }

   function submitRates(){
      rated = true
      menu.setOpen(false)
      dispatch('submitRates',{
         rates: rates,
         puzzleId: puzzleId,
         round: round
      })
   }
 </script>

<div>
   <Button on:click={() => menu.setOpen(true)} disabled={rated} color="secondary">ให้คะแนน</Button>
   <MenuSurface bind:this={menu} anchorCorner={anchor}>
      <div class="flex-column">
         <StarRatings {...funRating} on:rate={rate}/>
         <StarRatings {...difficultyRating} on:rate={rate}/>
         <Button on:click={() => submitRates()}>ส่ง</Button>
      </div>
   </MenuSurface>
 </div>
  
