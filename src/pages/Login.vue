<template>
    <div class=" text-gray-700 dark:text-gray-300">
      <h2 class="text-2xl font-bold tracking-tight pt-8 pb-8 ">
       Login
      </h2>
      <div class="
          grid grid-cols-12
          gap-x-20 
          border   
          dark:border-secondary-900 
          dark:bg-secondary-900  
          bg-primary-50
          drop-shadow-md
          border-transparent    
          min-h-screen 
          rounded-md">
          <!-- ORDER FORM -->
        <div class="col-span-5 pl-20 pt-20 ">
            <LoginForm/>
        </div>
        <!-- Resumen del pedido -->
        <div class="col-span-7 bg-[url('img/login/fondo.png')]  bg-cover bg-center bg-no-repeat">
          
   
        </div>
      </div>
    </div>
  </template>

<script>

import LoginForm from "../components/LoginForm.vue";
export default {

    components: {
        LoginForm
    },
}
</script>

