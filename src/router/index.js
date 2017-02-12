import Vue from 'vue'
import Router from 'vue-router'

// Pages
import HomePage from 'components/HomePage'
import ProductsPage from 'components/ProductsPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsPage
    }
  ]
})
