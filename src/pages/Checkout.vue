
<template>
  <form>
    <div class="space-y-12">

      <div class="grid grid-cols-2 gap-x-20">
        <div>
          <div class="border-b border-gray-900/10 pb-12">
            <h2 class="text-xl font-semibold leading-7 text-gray-900">Información de Contacto</h2>
            <div class="sm:col-span-4">
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email
                address</label>
              <div class="mt-2">
                <input id="email" name="email" type="email" autocomplete="email" class="
                  block w-full 
                  rounded-md border-0 
                  py-1.5 text-gray-900 
                  shadow-sm ring-1 ring-inset
                   ring-gray-300 
                   placeholder:text-gray-400 
                   focus:ring-2 focus:ring-inset 
                   focus:ring-indigo-600 
                   m:text-sm 
                   sm:leading-6" />
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
                <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="
                    block w-full 
                    rounded-md border-0 py-1.5
                    text-gray-900 
                    shadow-sm ring-1 
                    ring-inset 
                    ring-gray-300 
                    placeholder:text-gray-400 
                    focus:ring-2 focus:ring-inset 
                    focus:ring-indigo-600 
                    sm:text-sm s
                    m:leading-6" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-xl font-semibold leading-7 text-gray-900">Resumen del pedido</h2>
          <div class="
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
          </div>
        </div>

      </div>





    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
      <button type="submit"
        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
    </div>
  </form>
</template>
  
<script>
export default {

  data() {
    return {
      inputs: [
        { name: 'Nombre', label: 'Nombre', type: 'text' },
        { name: 'Apellido', label: 'Apellido', type: 'text' }]
    }
  }
}
</script>