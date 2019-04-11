import Vue from 'vue';
import axios from 'axios';
import moment from 'moment';

import App from './App.vue';
import './assets/style.css';

Vue.prototype.$api = axios;
Vue.prototype.moment = moment;

new Vue({
  el: '#app',
  render: (h) => h(App),
});
