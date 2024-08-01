
<template>
  <div class=" text-gray-700 dark:text-gray-300">
    <h2 class="text-2xl font-bold tracking-tight pt-8 pb-8 ">
      Checkout
    </h2>
    <div class="
        grid grid-cols-12 
        gap-x-20 border  
        border-gray-900/10 
        dark:border-gray-700  
        min-h-screen p-20 
        rounded-md">
        <!-- ORDER FORM -->
      <div class="col-span-7">
        <h2 class="text-xl font-semibold leading-7 pb-5">Información de Contacto</h2>       
        <CheckoutForm/>
      </div>
      <!-- Resumen del pedido -->
      <div class="col-span-5">
        <h2 class="text-xl font-semibold leading-7 pb-5">Resumen del pedido</h2>
        <OrderSummary />
      </div>
    </div>
  </div>
</template>
<script>

import OrderSummary from "../components/OrderSummary.vue";
import CheckoutForm from "../components/CheckoutForm.vue";



export default {

  components: {
    OrderSummary,
    CheckoutForm
  },
}
</script>
