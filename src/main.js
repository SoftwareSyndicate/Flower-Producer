// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import * as filters from './filters'

store.dispatch("watchProducts");

import { sync } from 'vuex-router-sync'

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)

// register global utility filters.
// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])
// })

// Hack for now
import * as UI from 'syndicate-ui'

// register global components
Vue.component('s-button', UI.Button)
Vue.component('s-input', UI.Input)
Vue.component('s-textarea', UI.TextArea)
Vue.component('s-select', UI.Select)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

