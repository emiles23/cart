<template>
  <H1Title>Método de entrega</H1Title>
  <div class="grid grid-cols-12 gap-4 mt-6 ">
    <CartSelect v-for="(option, index) in options" :key="index" :option="option" v-model="typeOfShipment" class=" col-span-6"  >
      <span class="flex flex-col  text-justify text-gray-700 dark:text-gray-300">
        <span>{{ option.title }}</span>
        <span class="text-gray-500 dark:text-gray-400 font-normal pb-7">{{ option.days }}</span>
        <span>{{ option.price }}</span>
      </span>
    </CartSelect>
  </div>

</template>

<script>
import H1Title from "../components/H1Title.vue";
import CartSelect from "../components/CartSelect.vue";

export default {
  components: {
    H1Title,
    CartSelect
  },

  data() {
    return {
      typeOfShipment: null,
      options: [
        { title: 'Estándar', days: '4-10 días laborables', price: '$5.00', value: 0 },
        { title: 'Express', days: '2-5 días laborables', price: '$16.00', value: 1 },
      ]
    }
  }
}
</script>
