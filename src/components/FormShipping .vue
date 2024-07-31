@@ -0,0 +1,63 @@
<template>
  <form class=" sm:text-sm">
    <div v-for="(row, index) in rows" :key="index" class="grid grid-cols-12 gap-4">
      <H1Title v-if="row.title" class=" col-span-12 ">{{ row.title }}</H1Title>

      <div v-for="(field, index) in row.fields" :class="row.class">
        <div v-if="field.type !== 'select'">
          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-700 dark:text-gray-300">
            {{ field.label }}
          </label>
          <fieldsForm v-model="field.value" :type="field.type" class="h-9" />
        </div>

        <div v-else-if="field.type === 'select'">
          <div>{{ field.label }}: {{ field.selected }}</div>
          <FieldsSelect v-model="field.selected">
            <option disabled value="">{{ field.disabled }}</option>
            <option v-for="(option, index) in field.options" :key="index" :value="option.value">{{ option.value }}
            </option>
          </FieldsSelect>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import FieldsForm from "../components/fieldsForm.vue";
import H1Title from "../components/H1Title.vue";
import FieldsSelect from "../components/FieldsSelect.vue";

export default {

  components: {
    FieldsForm,
    H1Title,
    FieldsSelect

  },

  data() {
    return {
      rows: [
        {
          class: 'col-span-12 mb-12',
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
          class: 'col-span-4  mt-5',
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
      ]
    }
  },

}
</script>