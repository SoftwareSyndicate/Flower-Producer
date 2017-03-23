import Vue from 'vue';
import Router from 'vue-router';

// Home
import HomePage from 'components/HomePage';

//Company
import CompanyPage from 'components/CompanyPage';

//Products
import ProductsPage from 'components/ProductsPage';
import AddProductPage from 'components/AddProductPage';
import ProductPage from 'components/ProductPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/products'
    },
    {
      path: '/company',
      name: 'company',
      component: CompanyPage,
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsPage,
    },
    {
      path: '/products/:id',
      name: 'product',
      component: ProductPage,
    },
  ]
});
