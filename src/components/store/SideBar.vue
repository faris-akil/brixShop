<template>
  <div>
    <v-sheet
      v-if="$vuetify.breakpoint.mdAndUp"
      height="300"
      :elevation="4"
      class="pa-8"
      tile
    >
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
        "Under RM25.00",
        "RM25 - RM100",
        "RM100 - RM500",
        "Over RM500",
      ],
      priceFilter: 0,
      checkBox: true,
    };
  },
};
</script>

<style></style>
