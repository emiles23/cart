<template>
  <Main>
    <div class="mt-6 grid grid-cols-1 gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 prim">
      <ProductCard v-for="(product, index) in productsWithDicount" :key="index" :product="product"
        :discountGroups="discountGroups" :getProductDiscount="getProductDiscount(product)" class="
            dark:bg-secondary-900 bg-gray-50 
            px-2
            py-3 
            rounded-xl" />
    </div>
  </Main>
</template>

<script>

import ProductCard from "../components/ProductCard.vue";
// pinia store
import { mapActions, mapState } from 'pinia'
import { useDefinitionsStore } from "../store/definitions.js"


export default {
  components: {
    ProductCard,
  },

  data() {
    return {
      showCart: false,
      showDiscount: false,
      showCurrentiIndex: null,
    }
  },

  methods: {
    ...mapActions(useDefinitionsStore, ['getProductDiscount'])
  },

  computed: {
    ...mapState(useDefinitionsStore, ['discounts', 'discountGroups', 'products', 'productsWithDicount']),
  }
}
</script>