<template>
  <div class="text-white  ">

    <!-- este es el menu -->
    <div class="flex items-center justify-end pr-10 w-full h-20 bg-slate-900 ">
      <button @click="showCart = !showCart" class=" bg-gray-800 px-8 py-2 rounded-lg hover:bg-slate-700">Cart</button>
    </div>
    <!-- este es el carrito -->

    <div v-if="showCart" class="absolute right-0 top-20 bg-slate-800 w-96 max-h-screen-80 z-10 overflow-y-scroll">
      <div v-if="elementCart()">
        <h1 class=" text-lg text-center py-6">Tu bolsa esta vacia</h1>
      </div>

      <!-- estos son los descuentos -->
      <ul v-if="getDiscountsApplied().length > 0" class="p-5">
        <li v-for="(discount, index) in getDiscountsApplied()" :key="index" class="pb-4">
          <span v-if="getPendingAmountToPayPerBrand(discount) > 0">
            Obten un descuento del
            <strong class="text-xl text-red-500">{{ discount.value }}%</strong>
            por llevar <strong class="text-teal-500"> ${{ discount.min }}</strong>
            en la marca
            <strong class="text-teal-300">{{ discount.brand }}</strong>
            faltan <strong class="text-teal-500"> ${{ getPendingAmountToPayPerBrand(discount).toFixed(2)  }}</strong>
          </span>
          <span v-else>
            Se ha aplicado un descuento del
            <strong class="text-xl text-red-500">{{ discount.value }}%</strong>
            por llevar <strong class="text-teal-500"> ${{ totalPerBrand(discount).toFixed(2)  }}</strong>
            en la marca
            <strong class="text-teal-300">{{ discount.brand }}</strong>
          </span>
        </li>
      </ul>


      <div class="flex justify-center items-center">
        <div v-if="!elementCart()" class="p-5 grid grid-cols-2 gap-5">

          <div class="flex flex-col justify-end">
            <h1>Subtotal actual:</h1>
            <h1 v-if="totalDiscount()" class="text-red-600">Descuento:</h1>
            <h1>Total:</h1>
          </div>
          <div class="flex flex-col justify-center text-center">
            <h1>${{ subtotal().toFixed(2) }}</h1>
            <h1 v-if="totalDiscount()" class="text-red-600">-${{ totalDiscount().toFixed(2) }}</h1>
            <h1 class=" border-t"> ${{ total().toFixed(2) }}</h1>
          </div>
        </div>
      </div>

      <ul v-for="(productBag, index) in shoppingBag" :key="index" class="grid grid-cols-12 gap-2 p-5 ">
        <div class="col-span-4 ">
          <li v-if="productBag.img" class="border-2 border-teal-800 w-20 h-20"> <img :src="productBag.img" alt="" />
          </li>
        </div>
        <div class=" col-span-8">
          <ul>
            <li>{{ productBag.name }}</li>
            <li class="text-lg font-semibold pt-4">{{ productBag.brand }}</li>
          </ul>
          <div class="text-xl text-center">
            <span v-if="getProductDiscount(productBag)" class="flex justify-center text-center gap-4">
              <span :class="getProductDiscount(productBag) ? 'line-through decoration' : ''">
                ${{ productBag.price + getProductDiscount(productBag) }}
              </span>
              <span>
                {{ getDiscountRepresentation(productBag) }}
              </span>
            </span>
            <span>
              ${{ productBag.price }}
            </span>
          </div>
        </div>
        <div class="col-span-12 flex justify-end">
          <ul class="flex justify-around gap-4 text-xl border border-teal-700 rounded-full w-full text-center mt-8">
            <li @click="deleteCart(productBag)" class="text-red-600 cursor-pointer p-2 text-3xl">
              -
            </li>
            <li class="p-2">{{ productBag.quantity }}</li>
            <li @click="addCart(productBag)" class="text-blue-400 cursor-pointer p-2 text-3xl">
              +
            </li>
          </ul>
        </div>
      </ul>

      <button v-if="!elementCart()" @click="deleteAll()"
        class="bg-teal-800 py-2 text-center text-lg font-semibold	border-slate-800 border-2 w-full">Eliminar
        todo
      </button>
    </div>

    <!-- estos son los productos -->
    <div class="flex items-center justify-center pt-40">
      <div class="grid grid-cols-12 gap-10">
        <div v-for="(product, index) in products" :key="index" class=" col-span-4 w-96 h-auto  text-lg bg-teal-800">
          <div class="border-2 border-teal-800"> <img :src="product.img" alt="" /></div>
          <ul class="px-10 py-5 h-36">
            <li>{{ product.name }}</li>
            <li>{{ product.brand }}</li>
          </ul>
          <div class="text-4xl text-center pb-4 h-20">
            <span v-if="getProductDiscount(product)" class="flex justify-center text-center gap-4">
              <span :class="getProductDiscount(product) ? 'line-through decoration' : ''">
                ${{ product.price }}
              </span>
              <span>
                {{ getDiscountRepresentation(product) }}
              </span>
            </span>
            <span v-if="getProductDiscount(product) > 0">
              ${{ getProductDiscount(product).toFixed(2) }}
            </span>
            <span v-else>
              ${{ product.price }}
            </span>
          </div>
          <button @click="addCart(product)" class="text-center text-lg py-1 bg-teal-950 w-full mt-3">
            Agregar al Carrito
          </button>
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

      products: [
        {
          name: 'Camisa sin manga',
          brand: 'Shein', price: 12,
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
          name: ' Zapatos deportivos de correr para hombre',
          brand: 'adidas',
          price: 300,
          img: "img/store/img10.png"
        },
        {
          name: 'Tenis para correr para mujer',
          brand: 'adidas',
          price: 150,
          img: "img/store/img11.png"
        },
        {
          name: 'Zapatos planos Belice estilo ballet para mujer',
          brand: 'adidas',
          price: 185,
          img: "img/store/img12.png"
        },

        {
          name: 'Plancha De Cabello Professional 450°F, plancha de pelo de cerámica ',
          brand: 'rucha',
          price: 260,
          img: "img/store/img13.png"
        },
        {
          name: 'Conair Plancha plana de cerámica doble, 1 pulgada',
          brand: 'rucha',
          price: 350,
          img: "img/store/img14.png"
        },
        {
          name: 'Titanium Ionic Hair Straightener, Professional Flat Iron For All Hair+ Types',
          brand: 'rucha',
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
            }
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
          brand: "adidas",
          min: 300,
          value: 15
        },
        {
          brand: "rucha",
          min: 100,
          value: 5
        },

      ],
      shoppingBag: []

    }
  },
  methods: {
    addCart(product) {
      var product = {...product}
      var priceWithDiscount = this.getProductDiscount(product)
      var productFound = this.shoppingBag.find(productBag => product.name == productBag.name)

      console.log(productFound)

      if (productFound) {
        productFound.quantity++
        return
      }
      product.quantity = 1
      product.price = priceWithDiscount > 0 ? priceWithDiscount : product.price
      this.shoppingBag = [product, ...this.shoppingBag]
    },

    elementCart() {
      return this.shoppingBag.length == 0

    },

    deleteCart(productToDelete) {

      if (productToDelete.quantity > 1) {
        productToDelete.quantity--
        return
      }

      this.shoppingBag = this.shoppingBag.filter((productBag) => productBag.name != productToDelete.name);


      // if (this.shoppingBag[index].quantity > 1) {   
      //   return this.shoppingBag[index].quantity--
      // } 
      // const resultado = animales.filter(animal => animal != 'oso');

      // this.shoppingBag = this.shoppingBag.filter((productBag, productBagIndex) => productBagIndex != index);

      // this.shoppingBag.splice(index,1)

      // this.shoppingBag = [
      //   ...this.shoppingBag.slice(0, index),
      //   ...this.shoppingBag.slice(index + 1),
      // ];

    },

    deleteAll() {
      return this.shoppingBag = []
    },

    subtotal() {
      return this.shoppingBag.map(product => product.quantity * product.price)
        .reduce((acc, toPay) => acc + toPay, 0);
    },

    getDiscountsApplied() {
      return this.discounts.filter(discountedBrand => this.shoppingBag
        .some(shoppingBagProduct => discountedBrand.brand === shoppingBagProduct.brand))
    },

    totalPerBrand(discount) {

      return this.shoppingBag
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
          discount = product.price - discountProductObject.value
        }
        else {
          discount = product.price - product.price * (discountProductObject.value / 100)
        }
      }

      return discount
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
    }

  }

}
</script>

<style scoped>
.max-h-screen-80 {
  max-height: 85vh;
}
</style>
