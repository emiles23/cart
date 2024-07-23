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
            var productFound = shoppingCartStore.products.find(productBag => product.name == productBag.name)
            if (productFound) {
                productFound.quantity++
                return
            }

            product.quantity = 1
            product.price = product.discountedPrice > 0 ? product.discountedPrice : product.price
            shoppingCartStore.products = [product, ...shoppingCartStore.products]
            // shoppingCartStore.products = shoppingCartStore.products
        },

        totalQty() {
            return shoppingCartStore.products.map(product => product.quantity)
                .reduce((acc, qty) => acc + qty, 0);

        },
    },
})
