<template>
    <BasicCard class="grid grid-cols-12  gap-x-20">
      <div class="col-span-5 pl-20 py-10 ">
        <LoginForm />
      </div>
      <div class="col-span-7 bg-[url('img/login/fondo.png')]  bg-cover bg-center bg-no-repeat"></div>
    </BasicCard>
</template>

<script>

import LoginForm from "../components/LoginForm.vue";
import BasicCard from "../components/BasicCard.vue";
export default {

  components: {
    LoginForm,
    BasicCard
  },
}
</script>

