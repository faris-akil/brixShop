<template>
    <v-container>
        <v-row>
            <v-col sm="3" offset-lg="1">
                <SideBar @priceFilter="runFilter" @searchingProducts="searchProducts"/>
            </v-col>
            <v-col sm="9" lg="7">
                <ProductDisplay :filter="filter" :search="search"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import SideBar from "@/components/store/SideBar.vue"
import ProductDisplay from "@/components/store/ProductDisplay"

export default {
    components: {
        SideBar,
        ProductDisplay
    },
    data(){
        return {
            filter: "any",
            search: ""
        }
    },
    methods: {
        runFilter(events){
            this.filter = events
        },
        searchProducts(query){
            this.search = query
        }
    }
}
</script>

<style>

</style>