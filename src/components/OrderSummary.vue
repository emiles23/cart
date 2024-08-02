<template>
  <div class="
            border 
           border-gray-900/10 
            max-h-screen-70 
            bg-primary-50  
            dark:bg-secondary-900
            drop-shadow-md
            dark:text-primary-50
            dark:border-secondary-800  
            rounded-md 
            text-base">
    <div v-if="!elementCart()">
      <div class="            
              max-h-screen-45
              overflow-y-auto 
              px-5               
            ">
        <CartProduct v-for="(product, index) in products" :key="index" :product="product" :index="index" />
      </div>
      <div class="
                border-t border-b  
                border-gray-900/10                         
                min-h-screen-20                      
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
  </div>
</template>

<script>

import CartProduct from "../components/CartProduct.vue";
import SubtotalTotal from "../components/SubtotalTotal.vue";
import CustomButton from "../components/CustomButton.vue";
// pinia
import { mapWritableState, mapActions } from 'pinia'
import { useShoppingCartStoreStore } from "../store/shoppingCartStore.js"
export default {

  components: {
    SubtotalTotal,
    CartProduct,
    CustomButton
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


.min-h-screen-20 {
  min-height: 20vh;
}
</style> 