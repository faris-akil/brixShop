<template>
  <v-sheet :height="sheetHeight" color="grey lighten-3">
      <v-container class="fill-height">
          <v-row align="center" justify="center">
              <h1 class="text-center display-3 hidden-xs-only">Welcome to LazaKIL!</h1>
              <h1 class="text-center display-1 hidden-sm-and-up">Welcome to LazaKIL</h1>
          </v-row>
      </v-container>
  </v-sheet>
</template>

<script>
export default {
    computed: {
        sheetHeight(){
            switch(this.$vuetify.breakpoint.name){
                case "xs": return "200px"
                case "s": return "300px"
                case "m": return "300px"
                case "l": return "300px"
                case "xl": return "350px"
            }
            return "300px"
        }
    }
}
</script>

<style>

</style>