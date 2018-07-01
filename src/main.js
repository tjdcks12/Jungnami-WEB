// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

// Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: '#36C5F1',
    text: '#B4B4B4'
    // secondary: '#b0bec5',
    // accent: '#8c9eff',
    // error: '#3f51b5'
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})