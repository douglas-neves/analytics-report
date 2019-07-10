import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    customer: {
      email: '',
      picture: '',
      name: '',
    }
  },
  mutations: {
    setCustomer(state, customer: any) {
      console.log('mutation', state, customer)
      state.customer = { ...state.customer, ...customer };
    },
  },
  actions: {
    setCustomer(context, customer: any) {
      context.commit('setCustomer', customer);
    },
  },
});
