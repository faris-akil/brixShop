<template>
  <div>
    <h3>Products</h3>
    <v-row>
      <v-col
        sm="6"
        md="4"
        v-for="(product, index) in $store.state.products"
        :key="product.name + index"
      >
        <VerticalProduct
          :product="product"
          :index="index"
          :addToCart="addToCart"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import VerticalProduct from "@/components/cards/VerticalProduct";

export default {
  components: {
    VerticalProduct,
  },
  methods: {
    addToCart(index, quantity = 1) {
      this.$store.commit('addItemToCart', { itemId: index, quantity });
      this.$store.commit('updateSnackBar', { show: true });
    },
  },
};
</script>

<style></style>
