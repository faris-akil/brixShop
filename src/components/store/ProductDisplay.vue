<template>
  <div>
    <h3>Products</h3>
    <v-row>
      <v-col
        sm="6"
        md="4"
        v-for="product in getProductList"
        :key="product.id"
      >
        <VerticalProduct
          :product="product"
          :index="product.id"
          :addToCart="addToCart"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col offset="1">
        <v-pagination v-if="!this.search" :length="Math.round(10 / 3 + 1)" v-model="pagination"> </v-pagination>
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
  props: ['filter', 'search'],
  data(){
    return {
      pagination: 1,
      products: []
    }
  },
  watch: {
    pagination(val){
      this.getProducts(val)
    },
    filter(){
      this.pagination = 1
      this.getProducts()
    },
    search(){
      this.searchProducts()
    }
  },
  computed: {
    getProductsLength(){
      return this.$store.state.products
    },
    getProductList(){
      if(this.pagination === 1){
        return this.products.slice(0,3)
      }
      else {
        return this.products.slice(this.pagination * 3 - 3, this.pagination * 3)
      }
    }
  },
  methods: {
    addToCart(product, quantity = 1) {
      let { name, image, price } = product
      this.$store.commit("addItemToCart", { itemId: product.id, image, name, price,  quantity  });
      this.$store.commit("updateSnackBar", {show: true, variant: "success", message: "Success! Item added to the cart."});
    },
    getProducts(){
      switch (this.filter) {
        case "ascending":
          this.products = this.$store.state.products.sort((a,b) => a.price - b.price)
          break;
        case "descending":
          this.products = this.$store.state.products.sort((a,b) => b.price - a.price)
          break;
        case "any":
          this.products = this.$store.state.initialProducts
          break;
      }
    },
    searchProducts(){
      this.products = this.$store.state.products.filter(product =>{
        let name = product.name.toLowerCase()
        return name.includes(this.search)})
    }
  },
  mounted(){
    this.getProducts();
  }
};
</script>

<style></style>
