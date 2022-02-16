import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
  },
  mutations: {
    add(state, product) {
      state.cart.push(product);
    },
    remove(state, product) {
      state.cart.splice(product, 1);
    },
  },
  actions: {
    get({ commit }) {
      commit("add");
    },
    remove({ commit }) {
      commit("remove");
    },
  },
});
