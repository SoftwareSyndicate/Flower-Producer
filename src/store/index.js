import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import * as actions from './actions';
import mutations from './mutations';

import { fetchItems, fetchIdsByType, fetchUser } from './api';

Vue.use(Vuex);

const state = {
  breadcrumbs: [],
  sideNavItems: [],
  org: {},
  products: [],
  activeProduct: null
};

const store = new Vuex.Store({
  state,
  getters,
  mutations
});

export default store;
