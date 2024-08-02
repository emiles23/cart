<template>
  <BasicButton :icon="icon" />
</template>

<script>
import BasicButton from "./BasicButton.vue";
import Paypal from "./icons/Paypal.vue";

export default {
  components: {
    BasicButton,
    Paypal
  },

  data() {
    return {
      icon: Paypal
    }
  }
}
</script>