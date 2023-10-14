<template>
    <div class="flow-root">
        <ul role="list">
            <li :class="index > 0 ? 'border-t border-gray-200' : ''" class="flex py-8 mt-4">
                <div class="h-24 w-24 flex-shrink-0 border border-gray-200 overflow-hidden rounded-md">
                    <img :src="product.img" alt="" class="h-full w-full object-cover object-center">
                </div>
                <div class="ml-4 flex flex-1 flex-col">
                    <div class="flex justify-between w-64 text-sm font-medium text-gray-900">
                        <h3>
                            <a href="#">{{ product.name }}</a>
                        </h3>
                        <div class="text-center text-slate-600">
                            <span v-if="product.productDiscount" class="flex justify-center text-center gap-4">
                                <span :class="product.productDiscount ? 'line-through decoration text-gray-400' : ''">
                                    ${{ product.price + product.productDiscount }}
                                </span>
                                <span>
                                    {{ product.discountRepresentation }}
                                </span>
                            </span>
                            <span>
                                ${{ product.discountedPrice }}
                            </span>
                        </div>
                    </div>
                    <p class="mt-1 text-sm text-gray-500 capitalize">{{ product.brand }}</p>
                    <div class="flex flex-1 items-end justify-between text-sm">
                        <p class="text-gray-500">Qty {{ product.quantity }}</p>
                        <div class="flex gap-7">
                            <button @click="shoppingCartStore.add(product)" type="button"
                                class="font-medium text-indigo-600 hover:text-indigo-500">Agregar</button>
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