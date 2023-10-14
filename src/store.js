// store.js
import { reactive } from 'vue'

export const shoppingCartStore = reactive({
  products: [],
  show: false,
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
})

export const definitions = reactive({
  discounts: [
    {
      brand: "Samsung",
      min: 1000,
      value: 10,

    },
    {
      brand: "Shein",
      min: 45,
      value: 30,
      products: [
        {
          name: 'Pantalones jogger',
          value: 20,
          min: 0
        },

        {
          name: 'Blazer unicolor',
          type: 'flat',
          value: 5,
          min: 0
        },

      ]
    },
    {
      brand: "Dell",
      min: 800,
      value: 12,

      products: [
        {
          name: 'Computadora OptiPlex personalizada de escritorio Intel Core i5-6500',
          value: 30,
          min: 0
        },

      ]
    },
    {
      brand: "Adidas",
      min: 300,
      value: 15
    },
    {
      brand: "Rucha",
      min: 100,
      value: 5
    },

  ],

  discountGroups: [
    {
      brands: ['Shein', 'Rucha', 'Adidas'],
      quantity: 3,
      value: 5,
      min: 400
    },

    {
      brands: ['Shein', 'Rucha', 'Adidas'],
      quantity: 3,
      value: 5,
      min: 200
    },
    {
      brands: ['Shein', 'Rucha', 'Adidas'],
      quantity: 3,
      value: 5,
      min: 200
    },
    {
      brands: ['Shein', 'Rucha', 'Adidas'],
      quantity: 3,
      value: 5,
      min: 200
    },
    {
      brands: ['Shein', 'Rucha', 'Adidas'],
      quantity: 3,
      value: 5,
      min: 200
    },
    {
      brands: ['Samsung', 'Adidas', 'Shein'],
      quantity: 2,
      value: 200,
      min: 1500,
      type: 'flat',
    }
  ],

  getDiscountGroupsRepresentation(discount) {
    var textDiscount = '-'

    if (discount?.type === 'flat') {
      textDiscount += `$${discount.value}`
    }
    else {
      textDiscount += `${discount.value}%`
    }

    return textDiscount
  },
})

export const searchEngine = reactive({
  search: '',
})