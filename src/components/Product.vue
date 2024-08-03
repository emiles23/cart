<template>
  <div class="grid grid-cols-12">
    <div class="col-span-6 bg-[url('img/login/fondo.png')]  bg-cover bg-center bg-no-repeat"></div>
    <div class="col-span-6">
    </div>
  </div>
</template>

<script>

// pinia
import { mapState } from 'pinia'
import { useShoppingCartStoreStore } from "../store/shoppingCartStore.js"
export default {

  components: {

  },

  // computed: {
  //   ...mapWritableState(useShoppingCartStoreStore, ['products']),

  // },

  methods: {
    ...mapState(useShoppingCartStoreStore, ['products',]),
  },
}
</script>
