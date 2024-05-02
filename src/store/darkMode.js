import { defineStore } from 'pinia'

export const useDarkModeStore = defineStore('darkMode', {

    state: () => ({ isDark:false }),
   
})