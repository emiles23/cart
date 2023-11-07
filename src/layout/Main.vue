<template>
  <div class="font-medium" :class="{'dark': isDark}">
    <NavBar @onChangeDarkMode="(value) => isDark = value" />
    <ShoppingCart />
    <div class="min-h-screen bg-white">
      <slot></slot>
    </div>
    
  </div>
</template>

<script>

import NavBar from "../components/NavBar.vue";
import ShoppingCart from "../components/ShoppingCart.vue";

export default {

  components: {
    NavBar,
    ShoppingCart
  },

  data(){
    return{
      isDark:false
    }
  }


}
</script>