import { persistStore } from './persistStore'

const info = {
   user: '',
   email: 'anon@gmail.com',
   answers: ['','','','','','']
}

export const store = persistStore('saveTBS2021Puzzles', info)