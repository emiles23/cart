import { createMemoryHistory, createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import Login from './pages/Login.vue'
import ProductsAvailable from './pages/ProductsAvailable.vue'
import Product from './pages/Product.vue'
import Checkout from './pages/Checkout.vue'


const routes = [
    { path: '/', component: ProductsAvailable, name:'Productos'},
    { path: '/login', component: Login },
    { path: '/products/:id', component: Product, name:'Producto' },
    { path: '/checkout', component: Checkout, name:'Checkout' },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router