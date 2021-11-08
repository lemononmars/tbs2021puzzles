import { persistStore } from './persistStore'

const answers = ['','','','','','']

export const store = persistStore('saveTBS2021Puzzles', answers)