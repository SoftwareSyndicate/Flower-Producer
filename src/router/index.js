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
import EditProductPage from 'components/EditProductPage';

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
