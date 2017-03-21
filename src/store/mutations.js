import { set } from 'vue'
import * as types from './mutation-types'

export default {
  [types.UPDATE_BREADCRUMBS] (state, breadcrumbs) {
    state.breadcrumbs = breadcrumbs;
  },
  [types.RECEIVE_PRODUCTS] (state, {products}) {
    console.log(products)
    state.products = products;
  },

}
