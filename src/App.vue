<template>
  <Main>
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-screen-2xl lg:px-10">
        <h1 class="text-2xl font-bold tracking-tight pt-8 pb-8 text-secondary-600 dark:text-primary-300 ">
        {{ $route?.name }}
      </h1>
        <RouterView></RouterView>
    </div>
  </Main>
</template>
<script>

import Main from "./layout/Main.vue";
// import ProductsAvailable from "./pages/ProductsAvailable.vue";
// import Checkout from "./pages/Checkout.vue";
// import Login from "./pages/Login.vue";
// import Product from "./pages/Product.vue";

// pinia
// import { mapWritableState } from 'pinia'
// import { useTabsStore } from "./store/tabs.js"

export default {
  components: {
    // ProductsAvailable,
    // Checkout,
    Main,
    // Login,
    // Product
  },

  // computed: {
  //   ...mapWritableState(useTabsStore, ['currentTab', 'tabs']),
  // },
  // mounted() {
  //   this.currentTab = this.tabs[0]
  // }
}
</script> 
