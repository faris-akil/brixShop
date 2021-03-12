<template>
  <div>
    <v-sheet
      v-if="$vuetify.breakpoint.mdAndUp"
      :elevation="4"
      class="pa-8"
      tile
    >
      <v-row>
        <v-text-field
          class="align-start"
          label="Search Products"
          @keypress.enter="searchProducts"
          v-model="search"
        ></v-text-field>
        <v-icon @click="searchProducts" class="hidden-sm-and-down"
          >mdi-magnify</v-icon
        >
      </v-row>

      <h3>Filters</h3>
      <v-radio-group v-model="priceFilter" :mandatory="true">
        <v-radio
          v-for="(price, index) in prices"
          :key="index"
          :label="price"
          :value="index"
        >
        </v-radio>
      </v-radio-group>
    </v-sheet>
    <v-expansion-panels v-if="$vuetify.breakpoint.smAndDown">
      <v-expansion-panel>
        <v-expansion-panel-header expand-icon="mdi-arrow-down">
          Filters
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-radio-group v-model="priceFilter" :mandatory="true">
            <v-radio
              v-for="(price, index) in prices"
              :key="index"
              :label="price"
              :value="index"
            >
            </v-radio>
          </v-radio-group>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prices: [
        "Any",
        "Highest - Lowest",
        "Lowest - Highest",
      ],
      priceFilter: 0,
      checkBox: true,
      search: ""
    };
  },
  watch: {
    priceFilter(val){
      this.setFilterEvents(val);
    }
  },
  methods: {
    searchProducts(){
      if(this.search){
        this.$emit("searchingProducts", this.search)
      }
    },
    setFilterEvents(number){
      let events = number === 0 ? "any" : number === 1 ? "descending" : "ascending";
      this.$emit("priceFilter", events);
    }
  }
};
</script>

<style></style>
