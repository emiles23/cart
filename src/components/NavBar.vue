<template>
  <!-- <div class="flex items-center justify-end gap-20 pr-10 w-full pt-5 pb-5 bg-slate-900 ">
    <div class="flex items-center ">
      <InputSearch class="px-3 py-1 rounded-lg bg-slate-700 focus:bg-white focus:text-slate-600 text-slate-500" />
    </div>
    <ButtonCart @click="shoppingCartStore.show = ! shoppingCartStore.show" />
  </div> -->
  <!-- drop-shadow-md -->
  <div class="  
    flex 
    items-center 
    justify-end 
    gap-12 pr-10 
    w-full h-20 
    shadow-xl 
    border  
    dark:bg-gray-900 
    bg-white 
    text-black 
    border-gray-200       
    ">
    <InputSearch />
    <button @click="changeDarkMode" >
      <Sun />
    </button>

    <Moon />
    <button @click="shoppingCartStore.show = !shoppingCartStore.show" class="flex gap-2 ">
      <ShoppingBag class="text-gray-500 hover:text-gray-600 drop-shadow-md"></ShoppingBag>0
    </button>
  </div>
</template>

<script>

import InputSearch from "../components/InputSearch.vue";
import ShoppingBag from "../components/icons/ShoppingBag.vue";
import Sun from "../components/icons/Sun.vue";
import Moon from "../components/icons/Moon.vue";

import { shoppingCartStore } from "../store.js";
import { darkMode } from "../store.js";

export default {
  components: {
    InputSearch,
    ShoppingBag,
    Sun,
    Moon
  },
  data() {
    return {
      shoppingCartStore: shoppingCartStore,
      darkMode,
      // isDark: false,
    }
  },

  methods: {
    changeDarkMode() {
      console.log('hola')
      darkMode.isDark = !darkMode.isDark
      localStorage.isDark = darkMode.isDark
      // this.$emit('onChangeDarkMode',  darkMode.isDark )
    },
  },

  mounted() {
    if (localStorage.isDark !== undefined) {
      darkMode.isDark = JSON.parse(localStorage.isDark)
      // this.$emit('onChangeDarkMode',  this.isDark )
    }

  }
}
</script>