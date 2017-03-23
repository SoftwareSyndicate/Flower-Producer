// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import * as filters from './filters'

import { sync } from 'vuex-router-sync'

// sync the router with the vuex store.
// this registers `store.state.route`
sync(store, router)

// register global utility filters.
// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])
// })

// Hack for now
// import Button from 'syndicate-ui/src/main'
// console.log(Button);

// register global components
import Button from 'components/Button'
import Input from 'components/Input'
import TextArea from 'components/TextArea'
import Select from 'components/Select'

Vue.component('s-button', Button)
Vue.component('s-input', Input)
Vue.component('s-textarea', TextArea)
Vue.component('s-select', Select)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

