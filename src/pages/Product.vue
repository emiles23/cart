<template>
  <ProductDescription v-if="displayedProduct" />
</template>

<script>
import { mapActions, mapWritableState } from "pinia";
import ProductDescription from "../components/ProductDescription.vue";
import { useProductDetailStore } from "../store/productDetail.js";
import { useDefinitionsStore } from "../store/definitions.js";
export default {
  components: {
    ProductDescription
  },
  mounted(){
    console.log(this.$route.params.id, 'hol')
    this.displayedProduct = this.getProductById(this.$route.params.id)
  },
  methods:{
    ...mapActions(useDefinitionsStore, ['getProductById'])
  },
  computed: {
    ...mapWritableState(useProductDetailStore, ['displayedProduct']),
  }
}
</script>




