<template>
  <div >
    <BasicForm :rows="rows" :buttonTitle="buttonTitle" />
    <h1 class="text-center py-10">O continuar con</h1>
    <div class="flex justify-center gap-5">
      <BasicButton v-for="button in buttons" :icon="button.icon">{{button.name}}</BasicButton>
    </div>

  </div>
</template>


<script>
import BasicForm from "../components/BasicForm.vue";
import BasicButton from "../components/BasicButton.vue";
import GoogleIcon from "../components/icons/Google.vue";
import GithubIcon from "../components/icons/GitHub.vue";

export default {

  components: {
    BasicForm,
    BasicButton,
    GoogleIcon,
    GithubIcon
  },
  data() {
    return {
      buttons: [
        {
          name:'Google',
          icon: GoogleIcon
        },
        {
          name:'Github',
          icon: GithubIcon
        }
      ],
      // typeOfShipment: null,
      buttonTitle: 'Procesar Pedido',
      rows: [
        // Delivery method 
        {
          class: 'col-span-12',
          title: 'Acceda a su cuenta',
          fields: [
            { name: 'email', label: 'Dirección de correo electrónico', type: 'email', value: '' },
            { name: 'Password', label: 'Contraseña', type: 'email', value: '' },
          ]
        },





      ]
    }
  },
}
</script>

<style scoped>
.max-w-500 {
  width: 500px;
  ;
}
</style>