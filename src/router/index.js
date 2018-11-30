/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Classify from '../pages/Classify/Classify.vue'
import Personal from '../pages/Personal/Personal.vue'
import Recommend from '../pages/Recommend/Recommend.vue'
import Shopping from '../pages/Shopping/Shopping.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/msite',
      meta: { requiresAuth: true }
    },
    {
      path: '/msite',
      component: Msite,
      meta: { requiresAuth: true }
    },
    {
      path: '/recommend',
      component: Recommend,
      meta: { requiresAuth: true }
    },
    {
      path: '/classify',
      component: Classify,
      meta: { requiresAuth: true }
    },
    {
      path: '/personal',
      component: Personal
    },
    {
      path: '/shopping',
      component: Shopping,
      meta: { requiresAuth: true }
    }
  ]
})
