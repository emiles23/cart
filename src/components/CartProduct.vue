<template>
    <div class="flow-root">
        <ul role="list">
            <li :class="index > 0 ? 'border-t border-primary-200 dark:border-secondary-600' : ''"
                class="grid grid-cols-12 gap-x-4 py-8 mt-4">
                <div class="
                    col-span-4             
                    border                    
                    border-x-primary-200                   
                   ">
                    <img :src="product.img">
                </div>
                <div class="
                    col-span-8                   
                    ">
                    <div class="
                        
                        text-sm 
                        font-medium  
                        ">
                        <h3 class="text-secondary-800 dark:text-primary-300 m-0">
                            <a href="#">{{ product.name }}</a>
                        </h3>
                        <div class="
                            text-right 
                            text-secondary-600 dark:text-primary-300">
                            <span v-if="product.productDiscount" class="
                                flex 
                                justify-end 
                               
                                gap-4">
                                <span :class="product.productDiscount ? 'line-through decoration text-secondary-400' : ''">
                                    ${{ product.price + product.productDiscount }}
                                </span>
                                <span>
                                    {{ product.discountRepresentation }}
                                </span>
                            </span>
                            <span class="">
                                ${{ product.discountedPrice }}
                            </span>
                        </div>
                    </div>
                    <p class="
                        my-2
                        text-sm                      
                        text-secondary-600                       
                        dark:text-primary-300
                        capitalize">
                        {{ product.brand }}
                    </p>
                    <div class="
                        flex 
                        flex-1 
                        items-end 
                        justify-between 
                        text-sm">
                        <p class="text-secondary-500 dark:text-primary-300">Qty {{ product.quantity }}</p>
                        <div class="flex gap-7">
                            <button @click="add(product)" type="button" class="
                                font-medium 
                                 text-tertiary-600
                                 hover:text-tertiary-700 
                                 dark:text-tertiary-500 
                                 dark:hover:text-tertiary-400">Agregar
                            </button>
                            <button @click="deleteCart(product)" type="button"
                                class="font-medium text-red-500 hover:text-red-700">
                                <Delete class="w-5 h-5"></Delete>
                            </button>
                        </div>
                    </div>
                </div>
            </li>
            <!-- More products... -->
        </ul>
    </div>
</template>

<script>

import Delete from "./icons/Delete.vue";

//pinia
import { mapWritableState, mapActions } from 'pinia'
import { useShoppingCartStoreStore } from "../store/shoppingCartStore.js"

export default {
    components: {
        Delete
    },

    props: {
        product: {
            default: {},
        },
        index: {
            default: 0,
        },
    },

    methods: {
        ...mapActions(useShoppingCartStoreStore, ['add']),

        deleteCart(productToDelete) {

            if (productToDelete.quantity > 1) {
                productToDelete.quantity--
                return
            }

            this.products = this.products.filter((product) => product.name != productToDelete.name);
        },
    },
    computed: {
        ...mapWritableState(useShoppingCartStoreStore, ['products']),
    }
}
</script>