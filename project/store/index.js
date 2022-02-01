import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
  },
  mutations: {
    add(state, payload) {
      state.cart.push(payload);
    },
    remove(state, payload){
      state.cart.splice(payload, 1);
    }
  },
  actions: {
    get({ commit }) {
      commit("add");
    },
    remove({  commit  }) {
      commit("remove");
    }
  },
});