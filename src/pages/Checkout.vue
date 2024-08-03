
<template>
    <BasicPageCard class="p-20">
      <!-- ORDER FORM -->
      <div class="col-span-7">
        <CheckoutForm />
      </div>
      <!-- Resumen del pedido -->
      <div class="col-span-5">
        <h2 class="text-xl font-semibold leading-7 pb-5">Resumen del pedido</h2>
        <OrderSummary />
      </div>
    </BasicPageCard>
</template>

<script>

import OrderSummary from "../components/OrderSummary.vue";
import CheckoutForm from "../components/CheckoutForm.vue";
import BasicPageCard from "../components/BasicPageCard.vue";

export default {

  components: {
    OrderSummary,
    CheckoutForm,
    BasicPageCard
  },
}
</script>


