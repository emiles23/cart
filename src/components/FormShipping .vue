<template>
  <form class=" sm:text-sm">
    <div v-for="(row, index) in rows" :key="index" class="grid grid-cols-12 gap-4">
      <H1Title v-if="row.title" class=" col-span-12 ">{{ row.title }}</H1Title>
      <div v-for="(field, index) in row.fields" :class="row.class">
        <label for="first-name" class="block text-sm font-medium leading-6 text-gray-700 dark:text-gray-300">
          {{ field.label }}
        </label>
        <fieldsForm v-model="field.value" :type="field.type" class="h-9" />
      </div>
    </div>
  </form>
</template>

<script>
import FieldsForm from "../components/fieldsForm.vue";
import H1Title from "../components/H1Title.vue";

export default {

  components: {
    FieldsForm,
    H1Title

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
            { name: 'Apellido', label: 'Apartamento, suite, etc.', type: 'text', value: '' },
          ]
        },
        {
          class: 'col-span-6 mt-4',
          fields: [
            { name: 'Apellido', label: 'Ciudad', type: 'text', value: '' },
            { name: 'Apellido', label: 'País', type: 'text  ', value: '' },
            { name: 'Apellido', label: 'Estado / Provincia', type: 'text', value: '' },
            { name: 'Apellido', label: 'Código postal', type: 'text', value: '' },
          ]
        },
        {
          class: 'col-span-12 mt-4',
          fields: [

            { name: 'Apellido', label: 'Teléfono', type: 'number', value: '' },
          ]
        },
      ]
    }
  },

}
</script>