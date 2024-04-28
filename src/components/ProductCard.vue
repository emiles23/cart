<template>
  <div class="group relative">
    <div class="
         min-h-80 
          aspect-h-1 
         aspect-w-1 
         w-full 
         overflow-hidden 
         rounded-md 
         bg-gray-200 
         lg:aspect-none 
         group-hover:opacity-75 
         lg:h-80">
      <img :src="product.img" class="
        h-full 
        w-full 
        object-cover 
        object-center 
        lg:h-full 
        lg:w-full">
    </div>
    <div class="
        mt-4 
        flex 
        justify-between 
        gap-7 
        capitalize">
      <div>
        <p class=" text-gray-700 dark:text-gray-300 ">
          {{ product.name }}
        </p>
        <p class="mt-5 text-gray-500 dark:text-gray-400 ">
          {{ product.brand }}
        </p>
      </div>
      <div class="flex flex-col gap-y-3   ">
        <template v-if="isGroupDiscountAvailable(product)">
          <div class="flex gap-2">
            <h1 class="text-gray-500 dark:text-gray-300">Descuento</h1>
            <Question @mouseover="showDiscountDropDown = true" @mouseleave="showDiscountDropDown = false" class="
                col-span-3 
                flex 
                justify-end 
                h-5 p-1 
                text-gray-500 
                bg-gray-200 
                shadow-lg 
                rounded-full 
                cursor-pointer 
                hover:bg-gray-300 " />
          </div>
          <DropDown v-if="showDiscountDropDown" class="
              absolute 
              origin-top-right 
              right-0 
              z-10
              mt-8 ">

            <TextDiscountGroups
              v-for="(discount, index) in definitions.discountGroups.filter(discount => discount.brands.includes(product.brand))"
              :key="index" :discount="discount" :class="index % 2 == 1 ? 'py-3' : '' " />
          </DropDown>
        </template>

        <div class="flex flex-col dark:text-gray-300">
          <div v-if="product.productDiscount" class="flex justify-center gap-4">
            <span :class="product.productDiscount ? 'line-through decoration text-gray-400' : ''">
              ${{ product.price }}
            </span>
            <span>
              {{ product.discountRepresentation }}

            </span>
          </div>

          <div class="flex justify-center">
            <span v-if="product.productDiscount">
              ${{ product.discountedPrice.toFixed(2) }}
            </span>
            <span v-else>
              ${{ product.price }}
            </span>
          </div>


        </div>
      </div>
    </div>
    <h1 @click="shoppingCartStore.add(product)" class="
      text-center
      dark:text-sky-400
      text-zinc-950
      hover:text-zinc-700
      cursor-pointer "> Agregar al Carrito
    </h1>
  </div>

  <!-- More products... -->
</template>

<script>

import DropDown from "./DropDown.vue";
import TextDiscountGroups from "./TextDiscountGroups.vue";
import Question from "./icons/Question.vue";
import { shoppingCartStore } from "../store.js"
import { definitions } from "../store.js"
export default {

  components: {
    DropDown,
    Question,
    TextDiscountGroups
  },

  props: {
    product: {
      default: {},
    },

    // discount:{
    //   default: {},
    // }
  },

  data() {
    return {
      showDiscountDropDown: false,
      shoppingCartStore,
      definitions
    }
  },


  methods: {
    isGroupDiscountAvailable(product) {
      return definitions.discountGroups.find(group => group.brands.includes(product.brand)) ? true : false
    },
  }
}
</script>