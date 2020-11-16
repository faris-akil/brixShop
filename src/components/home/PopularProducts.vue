<template>
    <v-container class="fill-height mb-12">
        <v-row>
            <v-col sm="10" offset-sm="1" md="8" offset-md="2">
                <h2>Popular Products<v-btn text small color="primary">View All</v-btn></h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
                <v-row>
                    <v-col sm="6" md="4" v-for="(product, index) in $store.state.products.slice(0,3)" :key="product.name + index">
                        <VerticalProduct :product="product" :index="index" :addToCart="addToCart" />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import VerticalProduct from "@/components/cards/VerticalProduct"

export default {
    components: {
        VerticalProduct
    },
    methods: {
        addToCart(index, quantity=1){
            this.$store.commit('addItemToCart', { itemId: index, quantity })
            this.$store.commit('updateSnackBar', {show: true})
        }
    }
};
</script>

<style></style>
