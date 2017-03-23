// Components
export const breadcrumbs = state => state.breadcrumbs;

// Products
export const product = state => {
  if(state.route.params && state.route.params.id != 'new'){
    return state.products.find((product)=>{
      return product.id === state.route.params.id
    })
  } else {
    return {}
  }
}

export const products = state => state.products;

export const filteredProducts = state => {
  // TODO actually filter
  return state.products;
}

