<template>
  <Main>
    <!-- product -->
    <div class="text-sm">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900 pt-8">
        Productos disponible
      </h2>
      <!-- <button @click="changeDarkMode">
          noche
        </button> -->
      <div class="mt-6 grid grid-cols-1 gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 prim">
        <ProductCard v-for="(product, index) in productsWithDicount" :key="index" :product="product"
          :discountGroups="discountGroups" :getProductDiscount="getProductDiscount(product)" class="
            dark:bg-secondary-900 bg-gray-50 
            px-2
            py-3 
            rounded-xl" />
      </div>
    </div>

  </Main>
</template>

<script>

import ProductCard from "../components/ProductCard.vue";
// pinia store
import { mapState } from 'pinia'
import { useDefinitionsStore } from "../store/definitions.js"
import { useSearchEngineStore } from "../store/searchEngine.js"


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

    getDiscountProductObject(product) {
      return this.discounts.find(discount => discount.brand == product.brand)?.products
        ?.find(productDiscount => productDiscount.name == product.name)
    },

    getProductDiscount(product) {
      var discount = 0
      var discountProductObject = this.getDiscountProductObject(product)

      if (discountProductObject) {
        if (discountProductObject?.type === 'flat') {
          discount = discountProductObject.value
        }
        else {
          discount = product.price * (discountProductObject.value / 100)
        }
      }
      return discount
    },

    getDiscountedPrice(product) {
      return product.price - this.getProductDiscount(product)
    },

    getDiscountRepresentation(product) {
      var textDiscount = '-'
      var discountObject = this.getDiscountProductObject(product)
      var value = discountObject?.value

      if (discountObject?.type === 'flat') {
        textDiscount += `$${value}`
      }
      else {
        textDiscount += `${value}%`
      }
      return textDiscount
    },
  },

  computed: {

    ...mapState(useSearchEngineStore, ['search']),
    ...mapState(useDefinitionsStore, ['discounts', 'discountGroups', 'products']),

    productsWithDicount() {
      return this.products.filter(product => product.name.toLowerCase().includes(this.search.toLowerCase())).map(product => {
        product.discountedPrice = this.getDiscountedPrice(product)
        product.productDiscount = this.getProductDiscount(product)
        product.discountRepresentation = this.getDiscountRepresentation(product)
        return product
      })
    },

  }
}
</script>