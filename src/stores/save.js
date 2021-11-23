import { persistStore } from './persistStore'
import { readable } from 'svelte/store';
import haiku from './name'

const info = {
	alias: haiku(),
   round1answers: ['','','','','',''],
   round2answers: ['','','','',''],
	round1time: [0,0,0,0,0,0],
   round2time: [0,0,0,0,0]
}

export const store = persistStore('saveTBS2021Puzzles', info)
export const currentTime = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});