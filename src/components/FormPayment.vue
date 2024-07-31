<template>
    <form class=" sm:text-sm block text-sm font-medium leading-6 text-gray-700 dark:text-gray-300">
        <H1Title>Método Pago </H1Title>
        <div v-for="(row, index) in rows" :key="index" class="grid grid-cols-12 gap-4 pt-5 ">
            <div v-for="(field, index) in row.fields" :class="row.class">
                <div v-if="field.type !== 'radio'">
                    <label for="first-name">
                        {{ field.label }}
                    </label>
                    <fieldsForm v-model="field.value" :type="field.type" />
                </div>
                <div v-else v-for="(option, index) in field.options" class=" flex ">
                    <input v-model="field.value" :type="field.type" :value="option.value" class="cursor-pointer" />
                    <label class="pl-2">{{ option.label }}</label>
                </div>
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
                    class: 'col-span-12 flex w-full gap-12',
                    fields: [
                        {

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
                    class: 'col-span-6 my-3',
                    fields: [
                        { name: 'card-number', label: 'Número de tarjeta', type: 'text', value: '', },
                        { name: 'name-on-card', label: 'Nombre en la tarjeta', type: 'text', value: '' },
                    ]
                },
                {
                    class: 'col-span-6 mt-4',
                    fields: [
                        { name: 'expiration-date', label: 'Fecha de caducidad (MM/AA)', type: 'date', value: '' },
                        { name: 'cvc', label: 'CVC', type: 'text', value: '' },

                    ]
                },
            ]
        }
    },

}
</script>