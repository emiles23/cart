<template>
    <BasicPageCard>
      <div class="col-span-5 pl-20 py-20 ">
        <LoginForm />
      </div>
      <div class="col-span-7 bg-[url('img/login/fondo.png')]  bg-cover bg-center bg-no-repeat"></div>
    </BasicPageCard>
</template>

<script>

import LoginForm from "../components/LoginForm.vue";
import BasicPageCard from "../components/BasicPageCard.vue";
export default {

  components: {
    LoginForm,
    BasicPageCard
  },
}
</script>

