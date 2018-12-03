import Vue from 'vue'
import 'lib-flexible/flexible.js'
import app from './app'
import router from './router'
import HeaderGuide from './components/HomePage/HeaderGuide/HeaderGuide'
import './mock/mockServer'
/* eslint-disable no-new */
import store from './store'
Vue.component('HeaderGuide', HeaderGuide)


new Vue({
  el: '#app',
  render: h => h(app),
  router,
  store
})
