<template>
    <BasicCard class="relative" :class="!show ? 'h-10' : 'h-auto'">
        <h1 class="p-2">Descripción</h1>
        <button @click=" show = !show" class="absolute right-3 top-3">

            <Minus v-if="show" class="h-5 w-5" />
            <Plus v-else class="h-5 w-5" />
        </button>
        <slot v-if="show"></slot>

    </BasicCard>
</template>
  
<script>

import BasicCard from "./BasicCard.vue";
import Minus from "./icons/Minus.vue";
import Plus from "./icons/Plus.vue";

export default {
    components: {
        BasicCard,
        Minus,
        Plus
    },
    data() {
        return {
            show: false
        }
    },
}
</script>
  
  
  