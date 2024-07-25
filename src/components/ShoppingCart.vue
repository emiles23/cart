<template>
  <div v-if="shoppingCartStore.show">
    <div v-if="elementCart()" class="
        drop-shadow-md      
        absolute 
        right-0 
        top-20
        w-96   
        z-10 ">
      <h1 class="
        text-secondary-600
        bg-primary-50
        dark:bg-secondary-900
        dark:text-primary-300
        text-base 
        text-center 
        py-6">Tu bolsa esta vacia
      </h1>
    </div>
    <div v-if="!elementCart()" class=" relative z-10">
      <div class="
        fixed inset-0 
        bg-secondary-800
        bg-opacity-75 
        transition-opacity">
      </div>
      <ModalCart>
        <CartHeader class="mt-4" />
        <!-- products... -->
        <div class="mt-3">
          <CartProduct v-for="(product, index) in shoppingCartStore.products" :key="index" :product="product"
            :index="index" />
        </div>
        <!-- end products... -->
        <!-- discounts -->
        <div class="         
          text-secondary-600 
          dark:text-secondary-400
          border-primary-200
          dark:border-secondary-500
          border-t 
          px-4
          py-6 
          sm:px-6
          text-justify      
          text-sm
          ">
          <div v-if="discountsApplied" class="text-secondary-600 dark:text-secondary-400">
            <div v-for="(discount, index) in discountsApplied" :key="index" class="pb-4">
              <span v-if="discount.remainingForDiscount > 0">
                Obten un descuento del
                <span>{{ discount.value }}%</span>
                por llevar <span class="font-extrabold"> ${{ discount.min }}</span>
                en la marca
                <span class="font-extrabold">{{ discount.brand }}</span>
                faltan <span class="font-extrabold"> ${{ discount.remainingForDiscount.toFixed(2) }}</span>
              </span>
              <span v-else class="text-tertiary-700 dark:text-tertiary-500">
                Se ha aplicado un descuento del
                <span class=" text-red-500">{{ discount.value }}%</span>
                por llevar <span class="font-extrabold"> ${{ discount.totalPaymentPerBrand.toFixed(2)
                }}</span>
                en la marca
                <span class="font-extrabold">{{ discount.brand }}</span>
              </span>
            </div>
          </div>

          <div v-for="(discount, index) in discountGroups" :key="index" class="pb-5">
            <span v-if="isGroupDiscountApplicable(discount)" class="text-tertiary-700 dark:text-tertiary-500">
              Se ha aplicado un descuento del <span class=" text-red-500">{{
              getDiscountGroupsRepresentation(discount)
              }}</span> por
              llevar las marcas <span class="font-extrabold">{{ discount.brands.join(', ') }}</span>
            </span>
            <TextDiscountGroups v-else :discount="discount" />
          </div>
          <!-- total and subtotal -->
        </div>
        <!-- total -->
        <div class="
          fixed 
          w-96
          py-6  
          right-0    
          px-9 
          bottom-0 
          z-20            
          shadow-xl 
          border-t 
          border-primary-300
          dark:border-secondary-500
          bg-white
          dark:bg-secondary-900
          ">
          <div v-if="!elementCart()" class="
            flex 
            justify-between 
            text-sm  
            font-medium">
            <div>
              <p class="text-secondary-800 dark:text-primary-300">Subtotal actual:</p>
              <p v-if="summary.totalDiscount" class="
              text-red-600">
                Descuento:
              </p>
              <!-- <p v-if="summary.discountGroup" class="text-red-600">Descuento Grupal:</p> -->
              <p class="text-gray-800 dark:text-gray-300">Total</p>
            </div>
            <div>
              <!-- <p>{{ getDiscountGroupAmount().toFixed(2) }}</p> -->
              <p class="text-secondary-800 dark:text-primary-300">${{ summary.subtotal.toFixed(2) }}</p>
              <!-- <p>{{ getTheGroupDiscount() }}</p> -->
              <p v-if="summary.totalDiscount" class="text-red-600">-${{ summary.totalDiscount.toFixed(2) }}</p>
              <!-- <p v-if="summary.discountGroup" class="text-red-600">-${{ summary.discountGroup.toFixed(2) }}</p> -->
              <p class=" text-secondary-800 dark:text-primary-300
              border-t 
              border-primary-300 dark:border-secondary-500">
                ${{ summary.total.toFixed(2) }}
              </p>
            </div>
          </div>
          <!-- <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p> -->
          <div class="mt-6 ">
            <ButtonCheckoutCart />
          </div>

          <div class="
            mt-6 
            flex 
            justify-center 
            text-center 
            text-sm 
           text-secondary-500">
            <DeleteAllCart v-if="!elementCart()" @click="deleteAll()" />
          </div>
        </div>
      </ModalCart>
    </div>



  </div>
</template>

<script>

import Delete from "./icons/Delete.vue";
import TextDiscountGroups from "./TextDiscountGroups.vue";
import CartProduct from "./CartProduct.vue";
import ModalCart from "./ModalCart.vue";
import CartHeader from "./CartHeader.vue";
import ButtonCheckoutCart from "./ButtonCheckoutCart.vue";
import DeleteAllCart from "./DeleteAllCart.vue";
import { shoppingCartStore } from "../store.js";

import { mapState } from 'pinia'
import { mapActions } from 'pinia'
import { useDefinitionsStore } from "../store/definitions.js"

export default {

  components: {
    Delete,
    TextDiscountGroups,
    CartProduct,
    ModalCart,
    CartHeader,
    ButtonCheckoutCart,
    DeleteAllCart,

  },

  data() {
    return {
      shoppingCartStore,
    }
  },
  methods: {

    ...mapActions(useDefinitionsStore, ['getDiscountGroupsRepresentation']),

    deleteAll() {
      return shoppingCartStore.products = []
    },

    elementCart() {
      return shoppingCartStore.products.length == 0
    },

    //  invoice calculations \\

    subtotal() {
      return shoppingCartStore.products.map(product => product.quantity * product.price)
        .reduce((acc, toPay) => acc + toPay, 0);
    },

    total() {
      return this.subtotal() - this.totalDiscount() - this.getDiscountGroupAmount()

    },

    getDiscountsApplied() {
      return this.discounts.filter(discountedBrand => shoppingCartStore.products
        .some(shoppingCartProduct => discountedBrand.brand === shoppingCartProduct.brand))
    },

    getPendingAmountToPayPerBrand(discount) {
      return discount.min - this.totalPerBrand(discount)
    },

    totalPerBrand(discount) {

      return shoppingCartStore.products
        .filter(product => product.brand == discount.brand)
        .map(product => product.quantity * product.price)
        .reduce((acc, toPay) => acc + toPay, 0)
    },

    totalDiscount() {
      return this.getDiscountsApplied()
        .filter(discount => this.totalPerBrand(discount) >= discount.min)
        .map(discount => this.totalPerBrand(discount) * (discount.value / 100))
        .reduce((acc, toPay) => acc + toPay, 0) + this.getDiscountGroupAmount()

    },

    // discount in group

    getTheGroupDiscount() {
      return this.discountGroups.map(group => {
        let prodcuts = shoppingCartStore.products.filter(productCart => group.brands.includes(productCart.brand)).map(productCart => {
          return productCart.brand
        })

        return prodcuts.filter((item, index) => {
          return prodcuts.indexOf(item) === index;
        })
      })

      // .find(group => group.brands.includes(productCart.brand))
    },

    getDiscountGroupAmount() {
      let group = this.getTheGroupDiscount()[0]
      let discountTotal = 0
      let subtotal = this.subtotal()

      discountTotal = this.discountGroups
        .filter(discount => subtotal >= discount.min && group.length >= discount.quantity)
        .map(discount => {
          if (discount.type === 'flat') {
            return (discount.value)
          }
          else {
            return (subtotal * discount.value) / 100
          }
        })
        .reduce((acc, toPay) => acc + toPay, 0)
      return discountTotal
    },

    // BOOLEANO

    isGroupDiscountApplicable(discount) {
      let group = this.getTheGroupDiscount()[0]
      let subtotal = this.subtotal()
      return subtotal >= discount.min && group.length >= discount.quantity ? true : false
    },
  },

  computed: {

    ...mapState(useDefinitionsStore, ['discountGroups', 'discounts']),
    discountsApplied() {
      return this.getDiscountsApplied().map(discount => {
        discount.remainingForDiscount = this.getPendingAmountToPayPerBrand(discount)
        discount.totalPaymentPerBrand = this.totalPerBrand(discount)
        return discount
      })
    },

    summary() {
      return {
        total: this.total(),
        subtotal: this.subtotal(),
        totalDiscount: this.totalDiscount(),
      }
    },
  }
}
</script>

<style scoped>
.max-h-screen-80 {
  max-height: 85vh;
}
</style>
