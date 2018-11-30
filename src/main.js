import Vue from 'vue'
import 'lib-flexible/flexible.js'
import app from './app'
import router from './router'
import HeaderGuide from './components/HeaderGuide/HeaderGuide'
/* eslint-disable no-new */

Vue.component('HeaderGuide', HeaderGuide)


new Vue({
  el: '#app',
  render: h => h(app),
  router
})
