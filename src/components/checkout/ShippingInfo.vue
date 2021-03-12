<template>
  <v-stepper-content step="2">
    <v-form ref="step2" v-model="valid" lazy-validation>
      <v-text-field
        v-model="data.street"
        label="Street Address"
        :rules="[rules.required]"
      />

      <v-text-field
        v-model="data.state"
        label="State"
        :rules="[rules.required]"
      />

      <v-text-field
        v-model="data.zip"
        label="Zip"
        :rules="[rules.required, rules.zip]"
        required
      />
    </v-form>

    <v-btn color="primary" @click="evaluateForm"> Continue </v-btn>

    <v-btn text @click="previous"> Go Back </v-btn>
  </v-stepper-content>
</template>

<script>
export default {
  props: {
    next: Function,
    previous: Function,
    rules: Object,
    data: Object,
  },
  data() {
    return {
      valid: true,
    };
  },
  methods: {
    evaluateForm() {
      if(!this.$refs.step2.validate()){
        return 0
      }
      this.next()
    },
  },
};
</script>

<style></style>
