import { persistStore } from './persistStore'
import { readable } from 'svelte/store';
import haiku from './name'

export const currentTime = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});

const d = new Date()

const info = {
	alias: haiku(),
	timeStarted: d.getTime(),
   round1answers: ['','','','','',''],
   round2answers: ['','','','',''],
	round1time: [0,0,0,0,0,0],
   round2time: [0,0,0,0,0],
	round1rate: [false,false,false,false,false,false],
	round2rate: [false,false,false,false,false],
	round1final: false,
	round2final: false,
	finalRanking: -1,
	timeTotal: 0
}

export const store = persistStore('saveTBS2021Puzzles', info)
