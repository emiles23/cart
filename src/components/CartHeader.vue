<template>
  <div class="flex items-start justify-between">
    <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Carrito de compra</h2>
    <div class="ml-3 flex h-7 items-center">
      <button @click="shoppingCartStore.show = false" type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500">
        <Close />
      </button>
    </div>
  </div>
</template>

<script>
import { shoppingCartStore } from "../store.js"
import Close from "./icons/Close.vue";

export default {
  components: {
    Close
  },

  data(){
    return{
      shoppingCartStore
    }
  }
}
</script>
