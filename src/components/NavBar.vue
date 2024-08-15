<template>
  <!-- <div class="flex items-center justify-end gap-20 pr-10 w-full pt-5 pb-5 bg-slate-900 ">
    <div class="flex items-center ">
      <InputSearch class="px-3 py-1 rounded-lg bg-slate-700 focus:bg-white focus:text-slate-600 text-slate-500" />
    </div>
    <ButtonCart @click="shoppingCartStore.show = ! shoppingCartStore.show" />
  </div> -->
  <!-- drop-shadow-md -->
  <div class=" 
    fixed
    grid
    grid-cols-12
     items-center 
    z-10
    pr-10 
    w-full 
    h-20 
    shadow-xl 
    border  
    dark:bg-gray-900 
    bg-white 
    text-black 
    border-gray-200       
    ">
    <div class="col-span-7 pl-52">
      <h1 @click="() => $router.push('/')" class="text-secondary-800 dark:text-primary-50 cursor-pointer">Productos</h1>
    </div>
    <div class="  
       col-span-5
       flex 
       gap-12 
       justify-end ">  
      <InputSearch  />
      <button @click="changeDarkMode">
        <Moon v-if="isDark" />
        <Sun v-else />
      </button>

      <button  v-if="$route.name !=='Checkout'"   @click="show = !show" class="flex gap-2 ">
        <ShoppingBag class="text-gray-500
         dark:text-gray-300 
         hover:text-gray-600 
         drop-shadow-md">\
        </ShoppingBag>
        <span class="
        dark:text-gray-300 
        hover:text-gray-600
        text-gray-500 ">
          {{ totalQty() }}
        </span>
      </button>
    </div>
  </div>
</template>

<script>

import InputSearch from "../components/InputSearch.vue";
import ShoppingBag from "../components/icons/ShoppingBag.vue";
import Sun from "../components/icons/Sun.vue";
import Moon from "../components/icons/Moon.vue";

// Pinia store
import { mapActions, mapWritableState } from 'pinia'
import { useShoppingCartStoreStore } from "../store/shoppingCartStore.js"
import { useDarkModeStore } from "../store/darkMode.js"


export default {
  components: {
    InputSearch,
    ShoppingBag,
    Sun,
    Moon
  },

  methods: {
    ...mapActions(useShoppingCartStoreStore, ['totalQty']),

    changeDarkMode() {
      this.isDark = !this.isDark
    },
  },

  watch: {
    isDark(newValue) {
      localStorage.setItem('isDark', JSON.stringify(newValue))
    }
  },

  computed: {
    ...mapWritableState(useDarkModeStore, ['isDark']),
    ...mapWritableState(useShoppingCartStoreStore, ['show']),
  }
}
</script>