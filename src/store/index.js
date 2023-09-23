import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

// Import Root Store

// Import Modules Store
import User from "./User/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { User },
  state: {},
  mutations: {},
  actions: {},
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
});
