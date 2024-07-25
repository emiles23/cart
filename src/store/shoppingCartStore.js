import { defineStore } from 'pinia'

export const useShoppingCartStoreStore = defineStore('shoppingCartStore', {

    state: () => ({
        products: [],
        show: false,
    }),

    actions: {
        add(product) {
            // console.log(this.getTheGroupDiscount())
            var product = { ...product }
            var productFound = this.products.find(productBag => product.name == productBag.name)
            if (productFound) {
                productFound.quantity++
                return
            }

            product.quantity = 1
            product.price = product.discountedPrice > 0 ? product.discountedPrice : product.price
            this.products = [product, ...this.products]
            // shoppingCartStore.products = shoppingCartStore.products
        },

        totalQty() {
            return this.products.map(product => product.quantity)
                .reduce((acc, qty) => acc + qty, 0);

        },
    },
})
