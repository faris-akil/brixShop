<template>
  <div>
      <v-row v-for="(product, index) in $store.state.cart" :key="index">
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
        removeFromCart(val){
            this.$store.commit("removeItemFromCart", val)
            this.$store.commit('updateSnackBar', {show: true, variant: 'error', message: "Item removed from cart"})
        }
    }
}
</script>

<style>

</style>