<template>
    <div class="flow-root">
        <ul role="list">
            <li :class="index > 0 ? 'border-t border-primary-200 dark:border-secondary-600' : ''" class="flex py-8 mt-4">
                <div class="
                    h-12 
                    w-12 
                    flex-shrink-0 
                    border                    
                    border-x-primary-200
                    overflow-hidden">
                    <img :src="product.img" alt="" class="
                       h-full 
                       w-full 
                       object-cover 
                       object-center">
                </div>
                <div class="
                    ml-4 
                    flex 
                    flex-1 
                    flex-col">
                    <div class="
                        flex 
                        justify-between 
                        gap-12 
                        text-justify 
                        text-sm 
                        font-medium  
                        ">
                        <h3 class="text-secondary-800 dark:text-primary-300 m-0">
                            <a href="#">{{ product.name }}</a>
                        </h3>
                        <div class="
                            text-center 
                            text-secondary-600 dark:text-primary-300">
                            <span v-if="product.productDiscount" class="
                                flex 
                                justify-center 
                                text-center 
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
                            <button @click="shoppingCartStore.add(product)" type="button" class="
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
import { shoppingCartStore } from "../store.js"

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
    data() {
        return {
            shoppingCartStore
        }
    },

    methods: {
        deleteCart(productToDelete) {

            if (productToDelete.quantity > 1) {
                productToDelete.quantity--
                return
            }
            shoppingCartStore.products = shoppingCartStore.products.filter((product) => product.name != productToDelete.name);

        },
    }
}
</script>