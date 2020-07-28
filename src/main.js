import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Indicator } from 'mint-ui'


Vue.use(MintUI)

Vue.prototype.$axios = axios

Vue.config.productionTip = false

//请求拦截
axios.interceptors.request.use(config => {
  Indicator.open()
  return config
}, error => {
  return Promise.reject(error)
})

//相应拦截
axios.interceptors.response.use(config => {
  Indicator.close()
  return config
}, error => {
  Indicator.close()
  return Promise.reject(error)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
