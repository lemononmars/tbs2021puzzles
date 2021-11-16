import { persistStore } from './persistStore'

const info = {
   round1answers: ['','','','','',''],
   round2answers: ['','','','',''],
}

export const store = persistStore('saveTBS2021Puzzles', info)