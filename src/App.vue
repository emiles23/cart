<template>
  <Main>
    <!-- product -->
    <div class="text-sm">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">
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
    </div>
  </Main>
</template>

<script>

import ProductCard from "./components/ProductCard.vue";
import Main from "./layout/Main.vue";
import { shoppingCartStore } from "./store.js";

// import { definitions } from "./store.js";

// pinia store
import { mapState } from 'pinia'
import { useSearchEngineStore } from "./store/searchEngine.js"
import { useDefinitionsStore } from "./store/definitions.js"
// import { useShoppingCartStoreStore } from "./store/shoppingCartStore.js"


export default {
  components: {
    ProductCard,
    Main,
  },

  data() {
    return {
      showCart: false,
      showDiscount: false,
      showCurrentiIndex: null,
      shoppingCartStore,
      // definitions,

    }
  },
  updated() {

    // console.log(this.getDiscountGroupAmount())
    // console.log(this.brandAdded(discount))
  },

  methods: {

    // changeDarkMode() {
    //   document.documentElement.classList.toggle("dark")
    // },

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
    // ...mapState(useShoppingCartStoreStore, ['products']),

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