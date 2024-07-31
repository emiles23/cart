
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
      <div class="col-span-7">
        <h2 class="text-xl font-semibold leading-7 pb-5">Información de Contacto</h2>
        <FormShipping class="mb-10" />
        <!-- Método de entrega -->
        <DeliveryMethod/>
        <!-- Método Pago -->
        <FormPayment class="mt-10" />    
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
import FormShipping from "../components/FormShipping .vue";
import OrderSummary from "../components/OrderSummary.vue";
import FormPayment from "../components/FormPayment.vue";
import DeliveryMethod from "../components/DeliveryMethod.vue";


export default {

  components: {
    FormShipping,
    OrderSummary,
    FormPayment,
    DeliveryMethod
  },
}
</script>
