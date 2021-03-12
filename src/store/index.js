import Vue from "vue";
import Vuex from "vuex";
import products from "./products.js"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products,
    initialProducts: JSON.parse(JSON.stringify(products)),
    snackbar: {
      show: false,
      variant: 'success',
      message: "Success! Item added to the cart."
    },
    cart: []
  },
  getters: {
    getProductsLength(state) {
      return state.products.length
    }
  },
  mutations: {
    addItemToCart(state, payload) {
      const { itemId, image, name, price, quantity } = payload
      const idx = state.cart.findIndex((product) => {
        return product.itemId === itemId
      })
      if (idx === -1) {
        state.cart.push({ itemId, image, name, price, quantity })
      } else {
        state.cart[idx].quantity = state.cart[idx].quantity + quantity
      }
    },
    removeItemFromCart(state, payload) {
      state.cart = state.cart.filter(item => item.itemId !== payload.itemId)
    },
    updateSnackBar(state, settings) {
      state.snackbar = {
        ...state.snackbar,
        ...settings
      }
    }
  },
  actions: {},
  modules: {}
});
