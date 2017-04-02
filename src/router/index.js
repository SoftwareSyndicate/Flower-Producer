import Vue from 'vue';
import Router from 'vue-router';


import * as Pages from '../pages'

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
      component: Pages.CompanyPage,
    },
    {
      path: '/products',
      name: 'products',
      component: Pages.ProductsPage,
    },
    {
      path: '/products/:id',
      name: 'product',
      component: Pages.ProductPage,
    },
  ]
});
