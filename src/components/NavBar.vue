<template>
  <!-- <div class="flex items-center justify-end gap-20 pr-10 w-full pt-5 pb-5 bg-slate-900 ">
    <div class="flex items-center ">
      <InputSearch class="px-3 py-1 rounded-lg bg-slate-700 focus:bg-white focus:text-slate-600 text-slate-500" />
    </div>
    <ButtonCart @click="shoppingCartStore.show = ! shoppingCartStore.show" />
  </div> -->

  <div class="flex items-center justify-end gap-20 pr-10 w-full h-20 bg-slate-900 ">
    <InputSearch />
    <ButtonCart @click="shoppingCartStore.show = ! shoppingCartStore.show" />
  </div>
</template>

<script>

import InputSearch from "../components/InputSearch.vue";
import ButtonCart from "../components/ButtonCart.vue";
import { shoppingCartStore } from "../store.js";

export default {
  components: {
    InputSearch,
    ButtonCart,
  },
  data() {
    return {
      shoppingCartStore: shoppingCartStore
    }
  }
}
</script>