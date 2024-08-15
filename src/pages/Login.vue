<template>
    <BasicCard class="grid grid-cols-1 sm:grid-cols-12 sm:gap-x-8 lg:gap-x-10 xl:gap-x-20">
      <div class="col-span-6 px-5 py-10 sm:px-0 sm:pl-8 lg:pl-10 lg:col-span-5  xl:pl-20">
        <LoginForm />
      </div>
      <div class="col-span-6 lg:col-span-7 bg-[url('img/login/fondo.png')]  bg-cover bg-center bg-no-repeat"></div>
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

