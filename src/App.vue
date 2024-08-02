<template>
  <Main>
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

      <div class="mb-5">
        <nav aria-label="Tabs" class="ec lx aci acn aea bbo text-primary-100">
          <button v-for="(tab, index) in tabs" :key="index" @click="currentTab = tab.component">
            <span class="
              bg-secondary-1000 p-3 
              rounded-s-lg border-r-2 
              border-primary-100">
              {{ tab.name }}
            </span>
          </button>
        </nav>
      </div>
      <!-- product -->
       <component :is="currentTab"></component>
    </div>
  </Main>
</template>
<script>

import Main from "./layout/Main.vue";
import ProductsAvailable from "./pages/ProductsAvailable.vue";
import Checkout from "./pages/Checkout.vue";
import Login from "./pages/Login.vue";


export default {

  data() {
    return {
      currentTab:'ProductsAvailable',
      tabs: [
        { name: 'Productos', component: 'ProductsAvailable' },
        { name: 'Checkout', component: 'Checkout' },
        { name: 'Login', component: 'Login' }
      ],
    }
  },
  components: {
    ProductsAvailable,
    Checkout,
    Main,
    Login
  },
}
</script> 