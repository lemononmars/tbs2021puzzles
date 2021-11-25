import { writable } from 'svelte/store';

export const persistStore = (key, initial) =>{
  const {subscribe, set, update} = writable(initial)

  return {subscribe, set, update, useLocalStorage:() => {
    const persist = localStorage.getItem(key)
    if(persist && JSON.parse(persist).timeStarted !== null) { // update to latest format (with alias parameter)
      const stored = JSON.parse(persist)
      set(stored)
    }
    subscribe(value => {
      localStorage.setItem(key, JSON.stringify(value))
    })
  }}
}