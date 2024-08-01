<template>
  <form class=" sm:text-sm">
    <div v-for="(row, index) in rows" :key="index" class="grid grid-cols-12 gap-4">
      <template v-if="!row.showIf || findField(row.showIf.name).value === row.showIf.value">
        <h1 v-if="row.title" class="
        col-span-12 
        mt-12
        mb-5
        text-xl
        font-semibold
        leading-7 pt-10
        text-gray-700 
        dark:text-gray-300  
        border-t 
        border-gray-900/10 
        dark:border-y-gray-700">
          {{ row.title }}
        </h1>
        <div v-for="(field, index) in row.fields" :class="row.class" class="block text-sm font-medium">

          <div v-if="field.type === 'radio'" class="flex gap-4 flex-col">
            <label class="leading-10"> {{ field.label }} </label>
            <div class="flex">
              <div v-for="(option, index) in field.options" class="flex mr-4">
                <input v-model="field.value" :type="field.type" :value="option.value" class="cursor-pointer" />
                <label class="pl-2">{{ option.label }}</label>
              </div>
            </div>
          </div>


          <div v-else-if="field.type === 'select'">
            <label class="leading-10">{{ field.label }}: {{ field.selected }}</label>
            <FieldSelect v-model="field.selected">
              <option disabled value="">{{ field.disabled }}</option>
              <option v-for="(option, index) in field.options" :key="index" :value="option.value">{{ option.value }}
              </option>
            </FieldSelect>
          </div>

          <div v-else-if="field.type === 'CartSelect'" class="grid grid-cols-2 gap-4">
            <CartSelect v-for="(option, index) in field.options" :key="index" :option="option" v-model="field.value">
              <span class="flex flex-col text-justify">
                <span>{{ option.title }}</span>
                <span class="text-gray-500 dark:text-gray-400 font-normal pb-7">{{ option.days }}</span>
                <span>{{ option.price }}</span>
              </span>
            </CartSelect>
          </div>

          <component v-else-if="field.type === 'component'" :is="field.name"></component>

          <div v-else>
            <label class="leading-10">{{ field.label }}</label>
            <FieldText v-model="field.value" :type="field.type" />
          </div>

        </div>
      </template>
    </div>
  </form>

  <!-- <ButtonPaypal/> -->
</template>
<script>
import FieldText from "../components/FieldText.vue";
import FieldSelect from "../components/FieldSelect.vue";
import CartSelect from "../components/CartSelect.vue";
import ButtonPaypal from "../components/ButtonPaypal.vue";

export default {

  components: {
    FieldText,
    FieldSelect,
    CartSelect,
    ButtonPaypal

  },

  data() {
    return {
      // typeOfShipment: null,
      rows: [
        // Delivery method 
        {
          class: 'col-span-12',
          fields: [
            { name: 'email', label: 'Dirección de correo electrónico', type: 'email', value: '' },
          ]
        },

        {
          class: 'col-span-6',
          title: 'Información de envío',
          fields: [
            { name: 'Nombre', label: 'Nombre', type: 'text', value: '' },
            { name: 'Apellido', label: 'Apellido', type: 'text', value: '' },
          ]
        },
        {
          class: 'col-span-12 mt-4',
          fields: [
            { name: 'Apellido', label: 'Empresa', type: 'text', value: '' },
            { name: 'Apellido', label: 'Dirección', type: 'text', value: '' },
          ]
        },

        {
          class: 'col-span-4  mt-6',
          fields: [
            {
              type: 'select',
              label: 'País',
              selected: 'A',
              disabled: 'Seleccione un País',
              options: [
                { text: 'One', value: 'A' },
                { text: 'Two', value: 'B' },
                { text: 'Three', value: 'C' }
              ]
            },
            {
              type: 'select',
              label: 'Ciudad',
              selected: 'A',
              disabled: 'Seleccione una Ciudad',
              options: [
                { text: 'One', value: 'A' },
                { text: 'Two', value: 'B' },
                { text: 'Three', value: 'C' }
              ],
            },
            {
              type: 'select',
              label: 'Estado',
              selected: 'A',
              disabled: 'Seleccione un Estado',
              options: [
                { text: 'One', value: 'A' },
                { text: 'Two', value: 'B' },
                { text: 'Three', value: 'C' }
              ]
            }
          ],
        },

        {
          class: 'col-span-6 mt-4',
          fields: [
            { name: 'Apellido', label: 'Código postal', type: 'text', value: '' },
            { name: 'Apellido', label: 'Apartamento, suite, etc.', type: 'text', value: '' },

          ]
        },
        {
          class: 'col-span-12 mt-4',
          fields: [
            { name: 'Apellido', label: 'Teléfono', type: 'text', value: '' },
          ]
        },

        // Shipping Method

        {
          class: 'col-span-12',
          title: 'Método de entrega',
          fields: [
            {
              type: 'CartSelect',
              value: 0,
              options: [
                { title: 'Estándar', days: '4-10 días laborables', price: '$5.00', value: 0 },
                { title: 'Express', days: '2-5 días laborables', price: '$16.00', value: 1 },
              ]
            }
          ]
        },


        // Payment Method 
        {
          class: 'col-span-12 flex w-full gap-12',
          title: 'Método Pago',
          fields: [
            {
              name: 'paymentType',
              label: 'Tipo de Pago',
              type: 'radio',
              value: 0,
              options: [
                { label: 'Tarjeta de crédito', value: 0 },
                { label: 'PayPal', value: 1 },
                { label: 'eTransfer', value: 2 },
              ]
            }
          ]
        },

        {
          showIf: {
            name: 'paymentType',
            value: 0,
          },
          class: 'col-span-12 my-3',
          fields: [
            { name: 'card-number', label: 'Número de tarjeta', type: 'text', value: '', },
            { name: 'name-on-card', label: 'Nombre en la tarjeta', type: 'text', value: '' },
          ]
        },

        {
          showIf: {
            name: 'paymentType',
            value: 0,
          },
          class: 'col-span-6 mt-4',
          fields: [
            { name: 'expiration-date', label: 'Fecha de caducidad (MM/AA)', type: 'date', value: '', },
            { name: 'cvc', label: 'CVC', type: 'text', value: '' },
          ]
        },


        {
          showIf: {
            name: 'paymentType',
            value: 1,
          },
          class: 'col-span-12 mt-10 flex justify-center ',
          fields: [
            // mejorar este tipo de componente
            { name: 'ButtonPaypal', type: 'component', },
          ]
        },
      ]
    }
  },
  methods: {
    findField(name) {
      return this.rows.reduce((arr, row) => [...arr, ...row.fields], []).find(field => field.name === name)
    }
  },

  computed: {
    fields() {
      return this.rows.reduce((arr, row) => [...arr, ...row.fields], [])
    }
  },
}
</script>