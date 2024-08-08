import { defineStore } from 'pinia'

export const useDefinitionsStore = defineStore('definitions', {

  state: () => ({
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
        brands: ['Samsung', 'Adidas', 'Shein'],
        quantity: 2,
        value: 200,
        min: 1500,
        type: 'flat',
      }
    ],

    products: [
      {
        name: 'Franela',
        brand: 'Shein',
        price: 12,
        img: "img/products/shein/img1.jpg",
        value: 0,
        images: [
          { img: "img/products/shein/img1.jpg", value: '0' },
          { img: "img/products/shein/img2.jpg", value: '1' },
          { img: "img/products/shein/img3.jpg", value: '2' },
        ],

        options: [
          { size: 'XXS', value: 0 },
          { size: 'XS', value: 1 },
          { size: 'S', value: 2 },
          { size: 'M', value: 3 },
          { size: 'L', value: 4 },
          { size: 'XL', value: 5 },
        ],

        descriptions: [
          { key: 'Tipo de manga:', val: 'Manga normal' },
          { key: 'Color:', val: 'Multicolorl' },
          { key: 'Tipo de patrón:', val: 'Liso' },
          { key: 'Escote:', val: 'Cuello redondo' },
          { key: 'Longitud de la manga:', val: 'Corto' },
          { key: 'Largo Tops:', val: 'Corto' },
          { key: 'Tipo de corte:', val: 'Corte normal' },
          { key: 'Tejido:', val: 'Estiramiento medio' },
          { key: 'Material :', val: 'Manga normal' },
          { key: 'Material de la parte superior:', val: 'Tejido de punto' },
        ],
      },

      {
        name: 'Camisa sin manga',
        brand: 'Shein',
        price: 12,
        img: "img/store/img1.png",
        value: 0,
        images: [
          { img: "img/products/shein/img3.jpg", value: '0' },
          { img: "img/products/shein/img2.jpg", value: '1' },
          { img: "img/products/shein/img1.jpg", value: '2' },

        ],
        options: [
          { size: 'XXS', value: 0 },
          { size: 'XS', value: 1 },
          { size: 'S', value: 2 },
          { size: 'M', value: 3 },
          { size: 'L', value: 4 },
          { size: 'XL', value: 5 },
        ],
        descriptions: [
          { key: 'Tipo de manga:', val: 'Manga normal' },
          { key: 'Color:', val: 'Multicolorl' },
          { key: 'Tipo de patrón:', val: 'Liso' },
          { key: 'Escote:', val: 'Cuello redondo' },
          { key: 'Longitud de la manga:', val: 'Corto' },
          { key: 'Largo Tops:', val: 'Corto' },
          { key: 'Tipo de corte:', val: 'Corte normal' },
          { key: 'Tejido:', val: 'Estiramiento medio' },
          { key: 'Material :', val: 'Manga normal' },
          { key: 'Material de la parte superior:', val: 'Tejido de punto' },
        ],
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
  }),

  actions: {
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
  },

})