<template>
  <BasicCard class="max-h-screen-70">
    <div v-if="!elementCart()">
      <div class="            
              overflow-y-auto 
              max-h-screen-45
              px-5               
            ">
        <CartProduct v-for="(product, index) in products" :key="index" :product="product" :index="index" />
      </div>
      <div class="
                border-t border-b  
                border-gray-900/10                                             
                p-5
                leading-loose                               b
            ">
        <SubtotalTotal class="" />
      </div>
      <div class="flex items-center h-24 px-5">
        <CustomButton>Confirmar pedido</CustomButton>
      </div>
    </div>
    <div v-else class="
        h-96 flex 
        justify-center 
        items-center text-xl  
        dark:text-primary-300 
        text-secondary-600">
      <h1>Tu bolsa esta vacia</h1>
    </div>
  </BasicCard>
</template>

<script>

import CartProduct from "./CartProduct.vue";
import SubtotalTotal from "./SubtotalTotal.vue";
import CustomButton from "./CustomButton.vue";
import BasicCard from "./BasicCard.vue";
// pinia
import { mapWritableState, mapActions } from 'pinia'
import { useShoppingCartStoreStore } from "../store/shoppingCartStore.js"
export default {

  components: {
    SubtotalTotal,
    CartProduct,
    CustomButton,
    BasicCard
  },

  computed: {
    ...mapWritableState(useShoppingCartStoreStore, ['products']),

  },

  methods: {
    ...mapActions(useShoppingCartStoreStore, ['elementCart',]),

  },
}
</script>



<style scoped>
.max-h-screen-45 {
  max-height: 45vh;
}

.max-h-screen-70 {
  max-height: 83vh;
}

/* 
.min-h-screen-20 {
  min-height: 20vh;
} */
</style> 