<template>
  <v-stepper-content step="1">
    <v-form ref="step1" v-model="valid" lazy-validation>
      <v-text-field
        v-model="data.name"
        :rules="[rules.required]"
        label="Name"
        required
      />
      <v-text-field
        v-model="data.email"
        :rules="[rules.required, rules.email]"
        label="Email"
        required
      />
      <v-text-field
        v-model="data.phone"
        :rules="[rules.required, rules.phone]"
        label="Phone Number"
        required
      />
    </v-form>
    <v-btn color="primary" @click="evaluateForm"> Continue </v-btn>
    <v-btn text @click="$router.replace({ name: 'Cart' })"> Cancel </v-btn>
  </v-stepper-content>
</template>

<script>
export default {
  props: {
    data: Object,
    next: Function,
    rules: Object,
  },
  data(){
    return {
      valid: true
    }
  },
  methods: {
    evaluateForm() {
      if(!this.$refs.step1.validate()){
        return 0;
      }
      this.next()
    },
  },
};
</script>

<style>
</style>