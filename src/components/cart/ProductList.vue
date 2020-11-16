<template>
  <div>
      <v-row v-for="(product, index) in $store.state.products" :key="index">
          <HorizontalProduct :product="product" :index="index" :updateCart="removeFromCart" btnAction="remove"/>
      </v-row>
  </div>
</template>

<script>
import HorizontalProduct from "@/components/cards/HorizontalProduct"

export default {
    components: {
        HorizontalProduct
    },
    methods: {
        removeFromCart(){
            
        }
    }
}
</script>

<style>

</style>