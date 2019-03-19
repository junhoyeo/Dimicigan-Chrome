import Vue from 'vue'
import axios from 'axios'
import moment from 'moment'

import App from './App.vue'

Vue.prototype.$api = axios
Vue.prototype.moment = moment

new Vue({
  el: '#app',
  render: h => h(App)
})
