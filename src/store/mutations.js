import { set } from 'vue'
import * as types from './mutation-types'

export default {
  [types.UPDATE_BREADCRUMBS] (state, breadcrumbs) {
    state.breadcrumbs = breadcrumbs
  },
  [types.RECEIVE_PRODUCTS] (state, {products}) {
    state.products = products
  },
  [types.ADD_PRODUCT] (state, {product}) {
    state.products.push(product)
  },
  [types.UPDATE_PRODUCT] (state, {product}) {
    state.product = product;
  },

  [types.COPY_PRODUCT] (state, {val}) {
    state.productCopy = val;
  },

  
}
