<template>
  <v-card outlined>
    <v-img :src="product.image" height="200px"></v-img>
    <v-card-title>{{ product.name }}</v-card-title>
    <v-card-subtitle>
      Price: RM{{ product.price }}
      <v-spacer></v-spacer>
      <div>
        Quantity: 
       <v-icon @click="quantity = quantity-1">mdi-minus</v-icon> <span class="pa-2">{{quantity}}</span>  <v-icon @click="quantity = quantity+1">mdi-plus</v-icon>
      </div>
    </v-card-subtitle>
    <v-card-actions>
        <v-btn color="success" outlined @click="addToCart(product, quantity)"><v-icon left>mdi-plus</v-icon>Add To Cart</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["product", "index", "addToCart"],
  watch: {
    quantity(val){
      if(val < 1){
        this.quantity = 1
      }
    }
  },
  data(){
    return{
      quantity: 1
    }
  }
};
</script>

<style></style>
