// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import SimpleVueValidation from 'simple-vue-validator'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './style.css'
import donorsData from './donorsData'
import { myMixin } from './components/mixins'
Vue.use(SimpleVueValidation)
Vue.config.productionTip = false
/* eslint-disable no-new */
let Validator = SimpleVueValidation.Validator
new Vue({
  el: '#app',
  router,
  localStorage: {
    donors: []
  },
  Validator: Validator,
  template: '<App/>',
  components: { App },
  created () {
    if (this.getter('donors') === null) {
      localStorage.setItem('donors', JSON.stringify(donorsData.donors))
    }
    if (this.getter('postsRequests') === null) {
      localStorage.setItem('postsRequests', JSON.stringify(donorsData.posts))
    }
    /*  if (this.getter('comments') === null) {
     localStorage.setItem('comments', JSON.stringify(donorsData.comments_data))
     } */
    console.log('app')
    console.log(localStorage.getItem('postsRequests'))
    console.log('app')
  },
  mixins: [myMixin]
})

