<template>
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
</template>


<script>
import { mapWritableState, mapActions } from 'pinia'
import { useShoppingCartStoreStore } from "../store/shoppingCartStore.js"
import DeleteAllCart from "./DeleteAllCart.vue";
import ButtonCheckoutCart from "./ButtonCheckoutCart.vue";

export default {

    components: {
        // Delete,
        DeleteAllCart,
        ButtonCheckoutCart
    },

    methods: {

        ...mapActions(useShoppingCartStoreStore,
            [               
                'elementCart',
                'subtotal',
                'getDiscountGroupAmount',              
                'totalDiscount'
            ]
        ),

        deleteAll() {
            return this.products = []
        },
        total() {
            return this.subtotal() - this.totalDiscount() - this.getDiscountGroupAmount()
        },    
    },

    computed: {
        ...mapWritableState(useShoppingCartStoreStore, ['products']),
  
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