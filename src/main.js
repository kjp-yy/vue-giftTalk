// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import Axios from 'axios';
import VueAxios from 'vue-axios';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
Vue.config.productionTip = false
Vue.prototype.$axios = Axios
Vue.use(ElementUI);
Vue.use(VueAxios, Axios)
/* eslint-disable no-new */
//
Axios.interceptors.request.use(
  config => {
    if (localStorage.getItem('Authorization')) {
      config.headers.Authorization = localStorage.getItem('Authorization');
      // config.headers.Authorization = store.state.Authorization;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  });

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
