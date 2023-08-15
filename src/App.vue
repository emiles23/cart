<template>
  <div class="font-medium   ">

    <!-- este es el menu -->
    <div class="flex items-center justify-end gap-20 pr-10 w-full h-20 bg-slate-900 ">
      <div class="flex">
        <div class="flex gap-2 relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
            class="absolute right-2 top-1 h-5 w-5 text-gray-400">
            <path fill-rule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clip-rule="evenodd"></path>
          </svg>
          <input v-model="search" id="search" name="search" placeholder="Search" type="search"
            class="px-3 py-1 rounded-lg bg-slate-700 focus:bg-white focus:text-slate-600 text-slate-500">
        </div>
      </div>


      <button @click="showCart = !showCart"
        class="text-slate-300 bg-gray-800 px-8 py-2 rounded-lg hover:bg-slate-700">Cart</button>
    </div>
    <!-- este es el carrito -->

    <div v-if="showCart" class="absolute right-0 top-20 bg-slate-800 w-96 max-h-screen-80 z-10 overflow-y-scroll">
      <div v-if="elementCart()">
        <h1 class="text-slate-300  text-base text-center py-6">Tu bolsa esta vacia</h1>
      </div>
      <div v-if="!elementCart()" class="relative z-10">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div class="absolute inset-0 overflow-hidden">
          <div class="fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div class="max-w-md">
              <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div class="flex items-start justify-between">
                    <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Carrito de compra</h2>
                    <div class="ml-3 flex h-7 items-center">
                      <button @click="showCart = !showCart" type="button"
                        class="-m-2 p-2 text-gray-400 hover:text-gray-500">
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                          aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div class="mt-8">
                    <div class="flow-root">
                      <ul v-for="(productBag, index) in shoppingCart" :key="index" role="list">
                        <li :class="index > 0 ? 'border-t border-gray-200' : ''" class="flex py-8 mt-4">
                          <div class="h-24 w-24 flex-shrink-0 border border-gray-200 overflow-hidden rounded-md">
                            <img :src="productBag.img" alt="" class="h-full w-full object-cover object-center">
                          </div>
                          <div class="ml-4 flex flex-1 flex-col">
                            <div class="flex justify-between  text-sm font-medium text-gray-900">
                              <h3>
                                <a href="#">{{ productBag.name }}</a>
                              </h3>
                              <div class="text-center text-slate-600">
                                <span v-if="productBag.productDiscount" class="flex justify-center text-center gap-4">
                                  <span
                                    :class="productBag.productDiscount ? 'line-through decoration text-gray-400' : ''">
                                    ${{ productBag.price + productBag.productDiscount }}
                                  </span>
                                  <span>
                                    {{ productBag.discountRepresentation }}
                                  </span>
                                </span>
                                <span>
                                  ${{ productBag.discountedPrice }}
                                </span>
                              </div>
                            </div>
                            <p class="mt-1 text-sm text-gray-500 capitalize">{{ productBag.brand }}</p>
                            <div class="flex flex-1 items-end justify-between text-sm">
                              <p class="text-gray-500">Qty {{ productBag.quantity }}</p>
                              <div class="flex gap-7">
                                <button @click="addCart(productBag)" type="button"
                                  class="font-medium text-indigo-600 hover:text-indigo-500">Agregar</button>
                                <button @click="deleteCart(productBag)" type="button"
                                  class="font-medium text-red-500 hover:text-red-700">Eliminar</button>
                              </div>
                            </div>
                          </div>
                        </li>
                        <!-- More products... -->
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="border-t border-gray-200 px-4 py-6 sm:px-6 text-justify text-slate-600 text-sm">
                  <!-- estos son los descuentos -->
                  <div class="p-5">
                    <ul v-if="discountsApplied">
                      <li v-for="(discount, index) in discountsApplied" :key="index" class="pb-4">
                        <span v-if="discount.remainingForDiscount > 0">
                          Obten un descuento del
                          <span>{{ discount.value }}%</span>
                          por llevar <span class="font-extrabold"> ${{ discount.min }}</span>
                          en la marca
                          <span>{{ discount.brand }}</span>
                          faltan <span class="font-extrabold"> ${{ discount.remainingForDiscount.toFixed(2) }}</span>
                        </span>
                        <span v-else>
                          Se ha aplicado un descuento del
                          <span class=" text-red-500">{{ discount.value }}%</span>
                          por llevar <span class="font-extrabold"> ${{ discount.totalPaymentPerBrand.toFixed(2)
                          }}</span>
                          en la marca
                          <span class="font-extrabold">{{ discount.brand }}</span>
                        </span>
                      </li>
                    </ul>

                    <ul v-for="(discount, index) in discountGroups" :key="index">
                      <li>
                        <span>
                          Por la compra mínima de <span class="font-extrabold">${{ discount.min }}</span> incluyendo tres
                          (3)
                          productos distintos de las marcas
                          <span class="font-extrabold">{{ discount.brands.join(', ') }}</span>, se aplicara un descuento
                          del
                          <span class="font-extrabold">{{ discount.value }}%</span> en tu factura total
                        </span>
                      </li>
                    </ul>
                  </div>
                  <!-- total and subtotal -->
                  <div v-if="!elementCart()" class="flex justify-between text-sm  font-medium">
                    <div>
                      <p>Subtotal actual:</p>
                      <p v-if="summary.totalDiscount" class="text-red-600">Descuento:</p>
                      <p>Total</p>
                    </div>
                    <div>
                      <p>${{ summary.subtotal.toFixed(2) }}</p>
                      <p>{{ getTheGroupDiscount() }}</p>
                      <p v-if="summary.totalDiscount" class="text-red-600">-${{ summary.totalDiscount.toFixed(2) }}</p>
                      <p class=" border-t border-slate-700">${{ summary.total.toFixed(2) }}</p>
                    </div>

                  </div>
                  <!-- <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p> -->
                  <div class="mt-6">
                    <a href="#" class="
                        flex items-center 
                        justify-center
                         rounded-md border
                          border-transparent 
                          bg-indigo-600 px-6
                           py-3 text-base 
                           font-medium 
                           text-white shadow-sm 
                           hover:bg-indigo-700">
                      Checkout
                    </a>
                  </div>
                  <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <button v-if="!elementCart()" @click="deleteAll()" type="button"
                      class="font-medium text-red-500 hover:text-red-700">
                      Eliminar Todo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- product -->
    <div class="bg-white text-sm">
      <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">
          Productos disponible
        </h2>

        <div class="mt-6 grid grid-cols-1 gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div v-for="(product, index) in productsWithDicount" :key="index" class="group relative">
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
              <img :src="product.img" class="h-full w-full object-cover object-center lg:h-full lg:w-full">
            </div>
            <div class="mt-4 grid grid-cols-2  relative">
              <ul>
                <li class=" text-gray-700">
                  {{ product.name }}
                </li>
                <li class="mt-1 text-gray-500 capitalize">
                  {{ product.brand }}
                </li>
              </ul>
              <div>
                <div class="text-center pb-4 h-20  font-medium text-slate-600">
                  <div>
                    <template v-if="isGroupDiscountAvailable(product)">
                      <div class="text-gray-500">-5% por comprar
                        <span @mouseover="openDropDownGroupDiscount(index)" @mouseleave="showCurrentiIndex = null"
                          class="bg-gray-200 text-gray-500  px-2 shadow-lg  rounded-full font-bold cursor-pointer hover:bg-gray-300">?</span>

                        <ul v-if="showCurrentiIndex == index" v-for="(discount, index) in discountGroups" :key="index"
                          class="
                          absolute
                          text-gray-500 
                          right-0
                          z-10 
                          mt-2 
                          w-56 
                          origin-top-right 
                          rounded-md 
                          bg-white 
                          shadow-lg 
                          ring-1 
                          ring-black
                          ring-opacity-5 
                          focus:outline-none 
                          text-justify
                          p-3">
                          <li>
                            <span>
                              Por la compra mínima de <span class="font-extrabold">${{ discount.min }}</span> incluyendo
                              tres
                              (3)
                              productos distintos de las marcas
                              <span class="font-extrabold">{{ discount.brands.join(', ') }}</span>, se aplicara un
                              descuento
                              del
                              <span class="font-extrabold">{{ discount.value }}%</span> en tu factura total
                            </span>
                          </li>
                        </ul>
                      </div>
                    </template>
                  </div>
                  <span v-if="product.productDiscount" class="flex justify-center text-center gap-4">
                    <span :class="product.productDiscount ? 'line-through decoration text-gray-400' : ''">
                      ${{ product.price }}
                    </span>
                    <span>
                      {{ product.discountRepresentation }}

                    </span>
                  </span>
                  <span v-if="product.productDiscount">
                    ${{ product.discountedPrice.toFixed(2) }}
                  </span>
                  <span v-else>
                    ${{ product.price }}
                  </span>
                </div>
              </div>
            </div>

            <h1 @click="addCart(product)" class="text-center text-zinc-950 hover:text-zinc-700 cursor-pointer">
              Agregar al Carrito
            </h1>
          </div>

          <!-- More products... -->
        </div>
      </div>
    </div>

  </div>
</template>

<script>

// import IconDelete from S'@/components/icons/IconDelete.vue'


export default {
  // components: {
  //   IconDelete,
  // },
  data() {
    return {
      showCart: false,
      showDiscount: false,
      showCurrentiIndex: null,

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
          price: 950,
          img: "img/store/img6.png"
        },

        {
          name: '(AMD Ryzen 5 5600X, RTX 3060, 16GB 3600Mhz',
          brand: 'Dell',
          price: 1499,
          img: "img/store/img7.png"
        },
        {
          name: 'Computadora OptiPlex personalizada de escritorio Intel Core i5-6500',
          brand: 'Dell',
          price: 235,
          img: "img/store/img8.png"
        },
        {
          name: 'procesador Intel Core i7-11700F, GeForce RTX 3060, 32 GB de RAM, 1 TB ',
          brand: 'Dell',
          price: 1165,
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
          price: 350,
          img: "img/store/img14.png"
        },
        {
          name: 'Titanium Ionic Hair Straightener, Professional Flat Iron For All Hair+ Types',
          brand: 'Rucha',
          price: 185,
          img: "img/store/img15.png"
        },

      ],

      discounts: [
        {
          brand: "Samsung",
          min: 600,
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
          min: 250,
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
      shoppingCart: [],
      search: '',
      discountGroups: [
        {
          brands: ['Shein', 'Rucha', 'Dell', 'Adidas'],
          quantity: 3,
          value: 5,
          min: 400
        }
      ]

    }
  },
  updated(){

    console.log(this.getTheGroupDiscount())
  },

  methods: {
    addCart(product) {
      
      var product = { ...product }
      var productFound = this.shoppingCart.find(productBag => product.name == productBag.name)
      if (productFound) {
        productFound.quantity++
        return
      }
      product.quantity = 1
      product.price = product.discountedPrice > 0 ? product.discountedPrice : product.price
      // console.log(product.price)
      this.shoppingCart = [product, ...this.shoppingCart]
    },

    elementCart() {
      return this.shoppingCart.length == 0

    },

    deleteCart(productToDelete) {

      if (productToDelete.quantity > 1) {
        productToDelete.quantity--
        return
      }

      this.shoppingCart = this.shoppingCart.filter((productBag) => productBag.name != productToDelete.name);


      // if (this.shoppingCart[index].quantity > 1) {   
      //   return this.shoppingCart[index].quantity--
      // } 
      // const resultado = animales.filter(animal => animal != 'oso');

      // this.shoppingCart = this.shoppingCart.filter((productBag, productBagIndex) => productBagIndex != index);

      // this.shoppingCart.splice(index,1)

      // this.shoppingCart = [
      //   ...this.shoppingCart.slice(0, index),
      //   ...this.shoppingCart.slice(index + 1),
      // ];

    },

    openDropDownGroupDiscount(index) {
      return this.showCurrentiIndex = index
    },

    isGroupDiscountAvailable(product) {
      return this.discountGroups.find(group => group.brands.includes(product.brand)) ? true : false
    },

    getTheGroupDiscount() {
      return this.discountGroups.map(group => {
        let prodcuts = this.shoppingCart.filter(productCart => group.brands.includes(productCart.brand)).map(productCart => {
          return productCart.brand
        })

        return prodcuts.filter((item, index) => {
          return prodcuts.indexOf(item) === index;
        })
      })

        // .find(group => group.brands.includes(productCart.brand))
    },

    deleteAll() {
      return this.shoppingCart = []
    },

    subtotal() {
      return this.shoppingCart.map(product => product.quantity * product.price)
        .reduce((acc, toPay) => acc + toPay, 0);
    },

    getDiscountsApplied() {
      return this.discounts.filter(discountedBrand => this.shoppingCart
        .some(shoppingCartProduct => discountedBrand.brand === shoppingCartProduct.brand))
    },

    totalPerBrand(discount) {

      return this.shoppingCart
        .filter(productBag => productBag.brand == discount.brand)
        .map(product => product.quantity * product.price)
        .reduce((acc, toPay) => acc + toPay, 0)
    },


    totalDiscount() {

      return this.getDiscountsApplied()
        .filter(discount => this.totalPerBrand(discount) >= discount.min)
        .map(discount => this.totalPerBrand(discount) * (discount.value / 100))
        .reduce((acc, toPay) => acc + toPay, 0)

    },

    total() {
      return this.subtotal() - this.totalDiscount()
    },

    getPendingAmountToPayPerBrand(discount) {
      return discount.min - this.totalPerBrand(discount)
    },

    getDiscountProductObject(product) {

      return this.discounts.find(discount => discount.brand == product.brand)?.products
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
      return this.products.filter(product => product.name.toLowerCase().includes(this.search.toLowerCase())).map(product => {
        product.discountedPrice = this.getDiscountedPrice(product)
        product.productDiscount = this.getProductDiscount(product)
        product.discountRepresentation = this.getDiscountRepresentation(product)
        return product
      })
    },

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
        totalDiscount: this.totalDiscount()
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
