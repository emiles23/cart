<template>
  <div class="
            border 
           border-gray-900/10 
            max-h-screen-70 
            bg-primary-50  
            dark:bg-secondary-900  
            dark:text-primary-50 
            text-base">
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
              leading-loose                               
          ">
      <SubtotalTotal class="" />
    </div>
    <div class="flex items-center h-24 px-5">
      <ButtonBag>Confirmar pedido</ButtonBag>
    </div>
  </div>
</template>

<script>

import CartProduct from "../components/CartProduct.vue";
import SubtotalTotal from "../components/SubtotalTotal.vue";
import ButtonBag from "../components/ButtonBag.vue";
// pinia
import { mapWritableState } from 'pinia'
import { useShoppingCartStoreStore } from "../store/shoppingCartStore.js"
export default {

  components: {
    SubtotalTotal,
    CartProduct,
    ButtonBag
  },



  computed: {
    ...mapWritableState(useShoppingCartStoreStore, ['products']),

  }
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