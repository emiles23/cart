<template>
  <div class="font-medium">
    <NavBar />
    <ShoppingCart />
    <slot>

    </slot>
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


}
</script>