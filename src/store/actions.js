import api from './api';
import * as types from './mutation-types';


export const watchProducts =  ({ commit }) => {
  api.watch("products", results => {
    let products = [];
    for(let key in results){
      results[key].created_at = new Date (results[key].created_at);
      products.push(results[key]);
    }
    commit(types.RECEIVE_PRODUCTS, {products});
  });
};


export const saveProduct =  ({ commit }, {product}) => {
  if(!product.id){
    return api.addItem('products', product).then(results => {
      commit(types.ADD_PRODUCT, product);
    });
  } else {
    return api.updateItem(product.id, 'products', product).then(results =>{
      console.log(results);
      // TODO update this
      // commit(types.UPDATE_PRODUCT, products);
    })
  }
};

export const setFilter = ({ commit }, filter) => {
  commit(types.SET_FILTER, filter);
};

