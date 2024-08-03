<template>
    <BasicPageCard class="min-h-screen">
        <Product/>
    </BasicPageCard>
</template>

<script>

import BasicPageCard from "../components/BasicPageCard.vue";
import Product from "../components/Product.vue";
export default {

  components: {
    BasicPageCard,
    Product
  },
}
</script>