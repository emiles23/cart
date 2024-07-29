
<template>
  <div class=" text-gray-700 dark:text-gray-300">
    <h2 class="text-2xl font-bold tracking-tight pt-8 pb-8 ">
      Checkout
    </h2>
    <div class="grid grid-cols-2 gap-x-20 border  border-gray-900/10 
          dark:border-gray-700  min-h-screen p-10">
      <div>
        <h2 class="text-xl font-semibold leading-7 mb-6">Información de Contacto</h2>
        <FormShipping />
        <div class="border-t  border-gray-900/10 mt-10">
          <h2 class="text-xl font-semibold leading-7 mb-6 mt-10">Pago</h2>
          <FormPayment />
        </div>
      </div>

      <div>
        <h2 class="text-xl font-semibold leading-7 pb-5">Resumen del pedido</h2>

        <OrderSummary />

      </div>

      <div>
        <h2 class="text-xl font-semibold leading-7">Método de entrega</h2>

        <!-- <fieldset class="
        block w-full 
        rounded-md border-0 py-1.5 px-2
        text-gray-900 
        shadow-sm ring-1 
        ring-inset 
        ring-gray-300 
        placeholder:text-gray-400 
        focus:ring-2 focus:ring-inset 
        focus:ring-indigo-600 
        sm:text-sm s
        m:leading-6">hghjghiigiyg </fieldset> -->
      </div>
    </div>
  </div>
</template>
  
<script>
import FormShipping from "../components/FormShipping .vue";
import OrderSummary from "../components/OrderSummary.vue";
import FormPayment from "../components/FormPayment.vue";

// pinia

export default {

  components: {
    FormShipping,
    OrderSummary,
    FormPayment
  },
}
</script>
