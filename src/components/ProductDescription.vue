<template>
  <BasicCard class="grid grid-cols-12 p-2 gap-9">
    <div class="col-span-7 flex flex-row ">
      <div class="flex flex-row gap-2">

        <div class="basis-1/12">
          <div class="flex flex-col gap-2 ">
            <img src="img/products/shein/img3.jpg">
            <img src="img/products/shein/img2.jpg">
          </div>
        </div>

        <div class="basis-11/12">
          <img src="img/products/shein/img1.jpg">
        </div>

      </div>
    </div>

    <div class="col-span-5 pr-9 pt-9">

      <div class="text-2xl grid grid-cols-2 pb-5">
        <h1 class="">Basic Tee</h1>
        <h1 class="flex justify-end">$35</h1>
      </div>

      <div class="flex">
        <h1>0</h1>
        <Star v-for="n in 5" />
      </div>

      <h1 class="pt-7 pb-2">Talla</h1>
      <div v-for="(size, index) in sizes " :key="index" class="grid grid-cols-12 gap-1">
        <CartSelect v-for="(option, index) in size.options" :key="index" :option="option" v-model="size.value"
          class="col-span-2 text-center">
          <h1>{{ option.size }}</h1>
        </CartSelect>
      </div>

      <CustomButton class="my-10">Agregar al Carrito

      </CustomButton>

      <Accordion class="mt-28 ">

        <table class="table-auto">
          <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
            </tr>
          </tbody>
        </table>

      </Accordion>
    </div>

  </BasicCard>
</template>

<script>
import CartSelect from "./CartSelect.vue";
import BasicCard from "./BasicCard.vue";
import CustomButton from "./CustomButton.vue";
import Star from "./icons/Star.vue";
import Accordion from "./Accordion.vue";


// pinia
import { mapState } from 'pinia'
import { useShoppingCartStoreStore } from "../store/shoppingCartStore.js"
export default {

  components: {
    BasicCard,
    Star,
    CartSelect,
    CustomButton,
    Accordion,
  },

  data() {
    return {
      sizes: [{
        value: 0,
        options: [
          { size: 'XXS', value: 0 },
          { size: 'XS', value: 1 },
          { size: 'S', value: 2 },
          { size: 'M', value: 3 },
          { size: 'L', value: 4 },
          { size: 'XL', value: 5 },
        ]
      }]

    }
  },


































  // computed: {
  //   ...mapWritableState(useShoppingCartStoreStore, ['products']),

  // },

  methods: {
    ...mapState(useShoppingCartStoreStore, ['products',]),
  },
}
</script>


