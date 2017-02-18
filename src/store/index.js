import Vue from 'vue'
import Vuex from 'vuex'
import { fetchItems, fetchIdsByType, fetchUser } from './api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    breadcrumbs: [],
    org: {},
    products: [],
  },
  
});  
export default store
