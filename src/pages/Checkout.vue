
<template>
    <BasicCard class="grid grid-cols-12 p-20 gap-x-20">
      <!-- ORDER FORM -->
      <div class="col-span-7">
        <CheckoutForm />
      </div>
      <!-- Resumen del pedido -->
      <div class="col-span-5">
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


