<template>
  <Main>
    <!-- product -->
    <div class="bg-white  dark:bg-gray-900 text-sm">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">
          Productos disponible
        </h2>
        <!-- <button @click="changeDarkMode">
          noche
        </button> -->
        <div class="mt-6 grid grid-cols-1 gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <ProductCard v-for="(product, index) in productsWithDicount" :key="index" :product="product"
            :discountGroups="discountGroups" :getProductDiscount="getProductDiscount(product)" class="
            dark:bg-gray-800 
            px-2
            py-3 
            rounded-xl" />
        </div>
      </div>
    </div>
  </Main>
</template>

<script>

import ProductCard from "./components/ProductCard.vue";
import Main from "./layout/Main.vue";
import { shoppingCartStore } from "./store.js";
import { definitions } from "./store.js";
import { searchEngine } from "./store.js";

export default {
  components: {
    ProductCard,
    Main,
  },

  data() {
    return {
      showCart: false,
      showDiscount: false,
      showCurrentiIndex: null,
      definitions,
      shoppingCartStore,
      searchEngine,

      products: [
        {
          name: 'Camisa sin manga',
          brand: 'Shein',
          price: 12,
          img: "img/store/img1.png"
        },
        {
          name: 'Blazer unicolor',
          brand: 'Shein',
          price: 15,
          img: "img/store/img2.png"
        },
        {
          name: 'Pantalones jogger',
          brand: 'Shein',
          price: 18,
          img: "/img/store/img3.png"
        },
        {
          name: '55 pulgadas Smart tv 4k',
          brand: 'Samsung', price: 799,
          img: "img/store/img4.png"
        },
        {
          name: '32 pulgadas SFire TV Omni Series ',
          brand: 'Samsung',
          price: 325,
          img: "img/store/img5.png"
        },
        {
          name: '75 pulgadas, clase Crystal UHD, serie AU8000, 4K, UHD, HDR, Smart TV',
          brand: 'Samsung',
          price: 500,
          img: "img/store/img6.png"
        },

        {
          name: '(AMD Ryzen 5 5600X, RTX 3060, 16GB 3600Mhz',
          brand: 'Dell',
          price: 300,
          img: "img/store/img7.png"
        },
        {
          name: 'Computadora OptiPlex personalizada de escritorio Intel Core i5-6500',
          brand: 'Dell',
          price: 23,
          img: "img/store/img8.png"
        },
        {
          name: 'procesador Intel Core i7-11700F, GeForce RTX 3060, 32 GB de RAM, 1 TB ',
          brand: 'Dell',
          price: 600,
          img: "img/store/img9.png"
        },

        {
          name: 'Zapatos deportivos de correr para hombre',
          brand: 'Adidas',
          price: 300,
          img: "img/store/img10.png"
        },
        {
          name: 'Tenis para correr para mujer',
          brand: 'Adidas',
          price: 150,
          img: "img/store/img11.png"
        },
        {
          name: 'Zapatos planos Belice estilo ballet para mujer',
          brand: 'Adidas',
          price: 185,
          img: "img/store/img12.png"
        },

        {
          name: 'Plancha De Cabello Professional 450°F, plancha de pelo de cerámica ',
          brand: 'Rucha',
          price: 260,
          img: "img/store/img13.png"
        },
        {
          name: 'Conair Plancha plana de cerámica doble, 1 pulgada',
          brand: 'Rucha',
          price: 20,
          img: "img/store/img14.png"
        },
        {
          name: 'Titanium Ionic Hair Straightener, Professional Flat Iron For All Hair+ Types',
          brand: 'Rucha',
          price: 10,
          img: "img/store/img15.png"
        },

      ],
    }
  },
  updated() {

    // console.log(this.getDiscountGroupAmount())
    // console.log(this.brandAdded(discount))
  },

  methods: {


    // changeDarkMode() {
    //   document.documentElement.classList.toggle("dark")
    // },


    getDiscountProductObject(product) {
      return definitions.discounts.find(discount => discount.brand == product.brand)?.products
        ?.find(productDiscount => productDiscount.name == product.name)
    },
    getProductDiscount(product) {

      var discount = 0
      var discountProductObject = this.getDiscountProductObject(product)

      if (discountProductObject) {
        if (discountProductObject?.type === 'flat') {
          discount = discountProductObject.value
        }
        else {
          discount = product.price * (discountProductObject.value / 100)
        }
      }

      return discount
    },

    getDiscountedPrice(product) {
      return product.price - this.getProductDiscount(product)
    },

    getDiscountRepresentation(product) {
      var textDiscount = '-'
      var discountObject = this.getDiscountProductObject(product)
      var value = discountObject?.value

      if (discountObject?.type === 'flat') {
        textDiscount += `$${value}`
      }
      else {
        textDiscount += `${value}%`
      }
      return textDiscount
    },
  },

  computed: {
    productsWithDicount() {
      return this.products.filter(product => product.name.toLowerCase().includes(searchEngine.search.toLowerCase())).map(product => {
        product.discountedPrice = this.getDiscountedPrice(product)
        product.productDiscount = this.getProductDiscount(product)
        product.discountRepresentation = this.getDiscountRepresentation(product)
        return product
      })
    },
  }

}
</script>