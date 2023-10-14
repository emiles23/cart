<template>
  <div class="flex">
    <div class="flex gap-2 relative">
      <Search  class="absolute right-2 top-1 h-5 w-5 text-gray-400" />
      <!-- <Close  class="absolute right-2 top-1 h-4 w-4 text-gray-900"/> -->
      <!-- v-model="search" -->
      <input v-model="searchEngine.search" id="search" name="search" placeholder="Buscar por Nombre" type="search"
        class="px-3 py-1 rounded-lg bg-slate-700 focus:bg-white focus:text-slate-600 text-slate-500">
    </div>
  </div>
</template>

<script>

import Search from "../components/icons/Search.vue";
// import Close from "../components/icons/Close.vue";
import { searchEngine } from "../store"

export default {

  components: {
    Search,
    // Close
  },

  data(){
    return{

      searchEngine
    }
  }
}
</script>