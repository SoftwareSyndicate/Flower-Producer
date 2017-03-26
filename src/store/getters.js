// Breadcrumbs
export const breadcrumbs = state => {
  let crumbs = []
  switch (state.route.name){
  case "company":
    crumbs.push({name: 'Company', route: '/company'});
    break;
  case "products":
    crumbs.push({name: 'Products', route: '/products'});
    break;
  case "product":
    crumbs.push({name: 'Products', route: '/products'});

    // TODO remove this hack, this is getting called before the route.params is being set
    if(state.route.params.id){
      let product = state.products.find((product)=>{
        return product.id === state.route.params.id
      })
      if(product){
        crumbs.push({name: product.name, route: '/products' + product.id})
      }
    } else {
      crumbs.push({name: 'New', route: '/products/new'})
    }
    break;
  }
  return crumbs
}

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

