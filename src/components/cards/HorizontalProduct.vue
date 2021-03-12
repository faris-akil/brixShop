<template>
  <v-card outlined min-width="100%" class="mb-5 pa-4">
    <div class="d-flex">
      <div>
        <v-img :src="product.image" width="120px" height="120px"></v-img>
      </div>
      <div class="d-flex flex-column justify-center">
        <v-card-title :class="$vuetify.breakpoint.xsOnly ? 'caption': 'subtitle-1'">
          {{ product.name }} 
        </v-card-title>
        <v-card-subtitle>
          RM{{ product.price }}
          <br>
          Quantity: {{product.quantity}}
          <br>
          Total: RM {{product.price * product.quantity}}
        </v-card-subtitle>
        <v-card-actions>
          <v-btn
            v-if="btnAction === 'remove'"
            color="error"
            class="ml-4"
            outlined
            :small="$vuetify.breakpoint.smAndUp"
            @click="updateCart(product)"
          >
            <v-icon v-if="$vuetify.breakpoint.smAndUp" small left>mdi-minus</v-icon>
            Remove <span v-if="$vuetify.breakpoint.smAndUp">From Cart</span> 
          </v-btn>
          <v-btn v-else color="success" small outlined @click="updateCart(i)">
            <v-icon v-if="$vuetify.breakpoint.smAndUp">mdi-plus</v-icon>
            Add To Cart
          </v-btn>
        </v-card-actions>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    product: Object,
    updateCart: Function,
    btnAction: String,
    i: Number,
  },
  computed: {
    findObject(){
      let obj =  this.$store.state.products.filter(item => item.id === this.product.itemId)
      console.log(obj)
      return obj[0]
    }
  }
};
</script>

<style></style>
