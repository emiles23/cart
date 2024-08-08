<template>
  <Main>
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div class="mb-5">
        <nav aria-label="Tabs" class="ec lx aci acn aea bbo text-primary-100">
          <button v-for="(tab, index) in tabs.filter( tab => tab?.isVisible !== false )" :key="index" @click="currentTab = tab">
            <span class="
              bg-secondary-1000 p-3 
              rounded-s-lg border-r-2 
              border-primary-100">
              {{ tab.name }}
            </span>
          </button>
        </nav>
      </div>
      <h1 class="text-2xl font-bold tracking-tight pt-8 pb-8 ">
        {{ currentTab?.name }}
      </h1>
      <!-- product -->
      <component :is="currentTab?.component"></component>
    </div>
  </Main>
</template>
<script>

import Main from "./layout/Main.vue";
import ProductsAvailable from "./pages/ProductsAvailable.vue";
import Checkout from "./pages/Checkout.vue";
import Login from "./pages/Login.vue";
import Product from "./pages/Product.vue";

// pinia
import { mapWritableState } from 'pinia'
import { useTabsStore } from "./store/tabs.js"

export default {
  components: {
    ProductsAvailable,
    Checkout,
    Main,
    Login,
    Product
  },

  computed: {
    ...mapWritableState(useTabsStore, ['currentTab', 'tabs']),
  },
  mounted() {
    this.currentTab = this.tabs[0]
  }
}
</script> 