
<template>
  <div>
    <h2 class="text-2xl font-bold tracking-tight text-gray-900 pt-8 pb-8 ">
      Checkout
    </h2>
    <div class="grid grid-cols-2 gap-x-20 border border-gray-900/10  min-h-screen p-10">
      <form class=" sm:text-sm">
        <!-- <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-xl font-semibold leading-7 text-gray-900">Información de Contacto</h2>
          <div class="sm:col-span-4">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email
              address</label>
            <div class="mt-2">
              <InputForm id="email" name="email" type="email" autocomplete="email" />
            </div>
          </div>
        </div> -->

        <h2 class="text-xl font-semibold leading-7 text-gray-900">Información de envío</h2>
        <div class="mt-10  gap-x-6 gap-y-8">
          <div v-for="(row, index) in rows" :key="index" class="grid grid-cols-12 gap-4">
            <div v-for="(field, index) in row.fields" :class="row.class">
              <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">
                {{ field.label }}
              </label>
              <InputForm :type="field.type" name="first-name" id="first-name" autocomplete="given-name"/>

            </div>
          </div>
        </div>
      </form>
      <div>
        <h2 class="text-xl font-semibold leading-7 text-gray-900 pb-5">Resumen del pedido</h2>
        <div class="
            border 
           border-gray-900/10 
            max-h-screen-70 
            bg-primary-50  
            dark:bg-secondary-900  
            dark:text-primary-50 
            text-base">
          <div class="            
            max-h-screen-45
            overflow-y-auto 
            px-5               
          ">
            <CartProduct v-for="(product, index) in products" :key="index" :product="product" :index="index" />
          </div>
          <div class="
              border-t border-b  
              border-gray-900/10                         
              min-h-screen-20                      
               p-5
              leading-loose                               
          ">
            <SubtotalTotal class="" />
          </div>
          <div class="flex items-center h-24 px-5">
            <ButtonBag>Confirmar pedido</ButtonBag>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-xl font-semibold leading-7 text-gray-900">Método de entrega</h2>

        <!-- <fieldset class="
        block w-full 
        rounded-md border-0 py-1.5 px-2
        text-gray-900 
        shadow-sm ring-1 
        ring-inset 
        ring-gray-300 
        placeholder:text-gray-400 
        focus:ring-2 focus:ring-inset 
        focus:ring-indigo-600 
        sm:text-sm s
        m:leading-6">hghjghiigiyg </fieldset> -->




      </div>


    </div>



  </div>
</template>
  
<script>
import InputForm from "../components/InputForm.vue";
import CartProduct from "../components/CartProduct.vue";
import SubtotalTotal from "../components/SubtotalTotal.vue";
import ButtonBag from "../components/ButtonBag.vue";
// pinia
import { mapWritableState } from 'pinia'
import { useShoppingCartStoreStore } from "../store/shoppingCartStore.js"
export default {

  components: {
    InputForm,
    SubtotalTotal,
    CartProduct,
    ButtonBag
  },

  data() {
    return {
      rows: [
        {
          class: 'col-span-6',
          fields: [
            { name: 'Nombre', label: 'Nombre', type: 'text', value:'' },
            { name: 'Apellido', label: 'Apellido', type: 'text',  value:'' },
          ]
        },

        {
          class: 'col-span-12 mt-4',
          fields: [
            { name: 'Apellido', label: 'Empresa', type: 'text',  value:'' },
            { name: 'Apellido', label: 'Dirección', type: 'text', value:'' },
            { name: 'Apellido', label: 'Apartamento, suite, etc.', type: 'text',  value:'' },

          ]
        },
        {
          class: 'col-span-6 mt-4',
          fields: [
            { name: 'Apellido', label: 'Ciudad', type: 'text',  value:'' },
            { name: 'Apellido', label: 'País', type: 'text ',  value:'' },
            { name: 'Apellido', label: 'Estado / Provincia', type: 'text',  value:'' },
            { name: 'Apellido', label: 'Código postal', type: 'text', value:'' },
          ]
        },

        {
          class: 'col-span-12 mt-4',
          fields: [

            { name: 'Apellido', label: 'Teléfono', type: 'number', value:'' },
          ]
        },
      ]
    }
  },

  computed: {
    ...mapWritableState(useShoppingCartStoreStore, ['products']),

  }
}
</script>

<style scoped>
.max-h-screen-45 {
  max-height: 45vh;
}

.max-h-screen-70 {
  max-height: 83vh;
}


.min-h-screen-20 {
  min-height: 20vh;
}
</style> 