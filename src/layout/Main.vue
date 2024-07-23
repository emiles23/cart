<template>
  <div class="font-medium" :class="{'dark': isDark }">
    <!-- <NavBar @onChangeDarkMode="(value) => isDark = value" /> -->
    <NavBar />
    <ShoppingCart />
    <div class="min-h-screen  bg-primary-100 dark:bg-secondary-1000">
      <slot></slot>
    </div>
    
  </div>
</template> 

<script>

import NavBar from "../components/NavBar.vue";
import ShoppingCart from "../components/ShoppingCart.vue";
// import { darkMode } from "../store.js";

// Pinia store
import { mapState } from 'pinia'
import { useDarkModeStore } from "../store/darkMode.js"

export default {

  components: {
    NavBar,
    ShoppingCart
  },

  data(){
    return{    
    }
  },

  computed:{
    ...mapState(useDarkModeStore, ['isDark']),
   }


}
</script>