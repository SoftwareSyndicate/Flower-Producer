import Vue from 'vue';
import Router from 'vue-router';

// Pages
import HomePage from 'components/HomePage';
import ProductsPage from 'components/ProductsPage';
import AddProductPage from 'components/AddProductPage';
import ProductPage from 'components/ProductPage';
import EditProductPage from 'components/EditProductPage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsPage,
    },
    {
      path: '/products/add',
      name: 'add-product',
      component: AddProductPage,
    },
    {
      path: '/products/:id',
      name: 'product',
      component: ProductPage,
    },
    {
      path: '/products/:id/edit',
      name: 'edit-product',
      component: EditProductPage,
    },
  ]
});
