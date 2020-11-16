<template>
  <v-container fluid class="fill-height grey lighten-5">
      <v-row >
          <v-col sm="8" md="5" offset-md="2" lg="4" offset-lg="4">
              <ProductList />
          </v-col>
          <v-col align-self="start" sm="4" md="3" order="first" order-sm="last">
              <CheckoutBox />
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import ProductList from "@/components/cart/ProductList"
import CheckoutBox from "@/components/cart/CheckoutBox"
export default {
    components: {
        ProductList,
        CheckoutBox
    }
}
</script>

<style>

</style>