<template>
  <div class="font-medium" :class="{'dark': darkMode.isDark }">
    <!-- <NavBar @onChangeDarkMode="(value) => isDark = value" /> -->
    <NavBar />
    <ShoppingCart />
    <div class="min-h-screen bg-white">
      <slot></slot>
    </div>
    
  </div>
</template>

<script>

import NavBar from "../components/NavBar.vue";
import ShoppingCart from "../components/ShoppingCart.vue";
import { darkMode } from "../store.js";


export default {

  components: {
    NavBar,
    ShoppingCart
  },

  data(){
    return{
      darkMode
    }
  }


}
</script>