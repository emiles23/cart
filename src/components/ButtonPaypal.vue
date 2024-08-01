<template>
    <button class="             
        px-6
        py-3 
        rounded-md 
        border 
        border-transparent    
        text-white shadow-sm 
        border-primary-300        
        dark:border-gray-800
        dark:bg-secondary-1000
        hover:bg-tertiary-400
        dark:hover:bg-tertiary-400
        ">
        <Paypal />
    </button>
</template>

<script>

import Paypal from "../components/icons/Paypal.vue";

export default {
  components: {
    Paypal
  },
}
</script>