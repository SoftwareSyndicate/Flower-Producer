import api from './api';
import * as types from './mutation-types';

export const getAllProducts = ({ commit }) => {
  api.getAllProducts(products => {
    commit(types.SET_PRODUCTS, {
      products
    });
  });
};

// console.log(api)
// api.add('products', {
//   name: "taco"
// }).then(results =>{
//   console.log("results: ", results)
// })

export const addProduct =  ({ commit }) => {
  api.watch("products", results => {
    let products = [];
    for(let key in results){
      results[key].created_at = new Date (results[key].created_at);
      products.push(results[key]);
    }
    commit(types.ADD_PRODUCT, products);
  });
};


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

// export const sendMessage = ({ commit }, payload) => {
//   api.createMessage(payload, message => {
//     commit(types.RECEIVE_MESSAGE, {
//       message
//     });
//   });
// };

// export const switchThread = ({ commit }, payload) => {
//   commit(types.SWITCH_THREAD, payload);
// };

