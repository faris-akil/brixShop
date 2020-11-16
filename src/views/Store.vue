<template>
    <v-container>
        <v-row>
            <v-col sm="3" offset-lg="1">
                <SideBar />
            </v-col>
            <v-col sm="9" lg="7">
                <ProductDisplay />
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
    }
}
</script>

<style>

</style>