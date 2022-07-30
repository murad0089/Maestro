import Vue from 'vue'
import App from './App.vue'
import {routes} from './router/index'
import './assets/main.css'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router =new VueRouter({
  routes,
  mode:'history',
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
