import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '../components/Register'
import Search from '../components/search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
