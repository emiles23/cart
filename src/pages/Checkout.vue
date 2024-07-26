
<template>
  <div>
    <h2 class="text-2xl font-bold tracking-tight text-gray-900 pt-8 pb-8 ">
      Checkout
    </h2>
    <div class="grid grid-cols-2 gap-x-20 border border-gray-900/10  min-h-screen p-10">
      <form>
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-xl font-semibold leading-7 text-gray-900">Información de Contacto</h2>
          <div class="sm:col-span-4">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email
              address</label>
            <div class="mt-2">
              <InputForm id="email" name="email" type="email" autocomplete="email" />
            </div>
          </div>
        </div>

        <h2 class="text-xl font-semibold leading-7 text-gray-900">Información de envío</h2>
        <div class="mt-10 grid grid-cols-12 gap-x-6 gap-y-8 sm:grid-cols-12">
          <div v-for="(input, index) in inputs" :key="index" class="sm:col-span-6">
            <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">
              {{ input.label }}
            </label>
            <div class="mt-2">
              <InputForm type="text" name="first-name" id="first-name" autocomplete="given-name" />
            </div>

          </div>
        </div>
      </form>


      <div>
        <h2 class="text-xl font-semibold leading-7 text-gray-900">Resumen del pedido</h2>
        <!-- <div class="
            border border-gray-900/10
            rounded                 
            text-secondary-600
            bg-primary-50
            dark:bg-secondary-900
            dark:text-primary-50
            text-base 
            text-center 
            py-6 
            h-96             
          ">
              <ShoppingCart />
            </div>
          </div> -->

        <ShoppingCart />
      </div>
    </div>
  </div>
</template>
  
<script>
import InputForm from "../components/InputForm.vue";
import ShoppingCart from "../components/ShoppingCart.vue";
export default {

  components: {
    InputForm,
    ShoppingCart
  },

  data() {
    return {
      inputs: [
        { name: 'Nombre', label: 'Nombre', type: 'text' },
        { name: 'Apellido', label: 'Apellido', type: 'text' }]
    }
  }
}
</script>