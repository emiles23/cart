
<template>
    <BasicCard class=" flex flex-col-reverse px-5 py-5 gap-y-10 lg:grid lg:grid-cols-12 lg:p-10 lg:gap-x-10 xl:gap-x-20 xl:p-20">
      <!-- ORDER FORM -->
      <div class="lg:col-span-7">
        <CheckoutForm />
      </div>
      <!-- Resumen del pedido -->
      <div class="lg:col-span-5">
        <h2 class="text-xl font-semibold leading-7 pb-5">Resumen del pedido</h2>
        <OrderSummary />
      </div>
    </BasicCard>
</template>

<script>

import OrderSummary from "../components/OrderSummary.vue";
import CheckoutForm from "../components/CheckoutForm.vue";
import BasicCard from "../components/BasicCard.vue";

export default {

  components: {
    OrderSummary,
    CheckoutForm,
    BasicCard
  },
}
</script>


