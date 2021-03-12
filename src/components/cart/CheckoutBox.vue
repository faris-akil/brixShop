<template>
  <div>
      <v-card outlined>
          <v-card-title>Payment Details</v-card-title>
          <v-card-text>
              <p>Total: RM {{ calculateTotal | twoDecimalPoint }}</p>
              <v-btn color="primary" @click="goToCheckout">Checkout</v-btn>
          </v-card-text>
      </v-card>
  </div>
</template>

<script>
export default {
    data(){
        return {
            checkoutForm: null,
            nameRules: [],
            name: '',
            emailRules: [],
            email: ''
        }
    },
    filters: {
        twoDecimalPoint(val){
            return (Math.round(val * 100) / 100).toFixed(2);
        }
    },
    computed: {
        calculateTotal(){
            console.log(this.$store.state.cart)
            let total = this.$store.state.cart.map(item => item.price * item.quantity)
            let sum = total.reduce((a,b) => {
                return a + b
            }, 0)
            return sum
        }
    },
    methods: {
        goToCheckout(){
            this.$router.push({ name: 'Checkout'})
        }
    }
}
</script>

<style>

</style>