<template>
    <form class=" sm:text-sm">
        <div v-for="(row, index) in rows" :key="index" class="grid grid-cols-12 gap-4 ">
            <div v-for="(field, index) in row.fields" :class="row.class">
                <div v-if="field.type !== 'radio'">
                    <label for="first-name" class="block text-sm font-medium leading-6 text-gray-700 dark:text-gray-300">
                        {{ field.label }}
                    </label>
                    <fieldsForm v-model="field.value" :type="field.type" />
                </div>
                <div v-else>
                    <input v-model="field.value" :type="field.type" />
                    <label>{{ field.label }}</label>
                </div>
            </div>
        </div>
    </form>
</template>


<script>
import FieldsForm from "../components/fieldsForm.vue";

export default {

    components: {
        FieldsForm,

    },

    data() {
        return {
            rows: [
                {
                    class: 'col-span-4 my-4',
                    fields: [
                        { name: 'payment-type', label: 'Tarjeta de crédito', type: 'radio', value: '' },
                        { name: 'payment-type', label: 'PayPal', type: 'radio', value: '' },
                        { name: 'payment-type', label: 'eTransfer', type: 'radio', value: '' },
                    ]
                },

                {
                    class: 'col-span-12 my-3',
                    fields: [
                        { name: 'card-number', label: 'Número de tarjeta', type: 'text', value: '' },
                        { name: 'name-on-card', label: 'Nombre en la tarjeta', type: 'text', value: '' },
                    ]
                },
                {
                    class: 'col-span-6 mt-4',
                    fields: [
                        { name: 'expiration-date', label: 'Fecha de caducidad (MM/AA)', type: 'text', value: '' },
                        { name: 'cvc', label: 'CVC', type: 'text', value: '' },

                    ]
                },
            ]
        }
    },

}
</script>