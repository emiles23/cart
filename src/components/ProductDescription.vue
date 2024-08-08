<template>
  <BasicCard class="grid grid-cols-12 p-2 gap-x-12">
    <div class="col-span-6 grid grid-cols-12">
      <div class="col-span-2 pr-2 pb-2">
        <img @click="currentImageSrc = image.img" v-for="(image) in displayedProduct.images" :src="image.img"
          :class="currentImageSrc == image.img ? 'border dark:border-tertiary-500 border-tertiary-800' : ''"
          class=" cursor-pointer mb-2">
      </div>
      <div class="col-span-10">
        <img :src="currentImageSrc">
      </div>
    </div>

    <div class="col-span-6 p-20">
      <div class="text-2xl grid grid-cols-2 pb-5">
        <h1 class="">{{ displayedProduct.name }}</h1>
        <h1 class="flex justify-end">${{ displayedProduct.price }}</h1>
      </div>
      <div class="flex">
        <h1>0</h1>
        <Star v-for="n in 5" />
      </div>
      <h1 class="pt-7 pb-2">Talla</h1>
      <div class="grid grid-cols-12 gap-1 pb-10">
        <CartSelect v-for="(option, ) in displayedProduct.options" :option="option" v-model="displayedProduct.value"
          class="col-span-2 text-center">
          <h1>{{ option.size }}</h1>
        </CartSelect>
      </div>
      <Accordion :titleAccordio="titleAccordio">
        <table>
          <tbody class="text-justify text-xs font-normal leading-loose">
            <tr v-for="(description) in displayedProduct.descriptions">
              <td class="pr-10">{{ description.key }}</td>
              <td>{{ description.val }}</td>
            </tr>
          </tbody>
        </table>
      </Accordion>

      <CustomButton class="mt-10">Agregar al Carrito</CustomButton>
    </div>

  </BasicCard>
</template>

<script>
import CartSelect from "./CartSelect.vue";
import BasicCard from "./BasicCard.vue";
import CustomButton from "./CustomButton.vue";
import Star from "./icons/Star.vue";
import Accordion from "./Accordion.vue"

// pinia
import { mapState } from 'pinia'
import { useProductDetailStore } from "../store/productDetail.js"

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
      currentImageSrc: '',
      titleAccordio: 'Descripción',
    }
  },

  mounted() {
    this.currentImageSrc = this.displayedProduct.images?.at(0).img ?? ''
  },

  computed: {
    ...mapState(useProductDetailStore, ['displayedProduct']),
  },
}
</script>


