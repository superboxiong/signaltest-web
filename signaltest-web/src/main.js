// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import toastRegistry from './toast/index'
import layer from 'vue-layer'
import ElementUi from 'element-ui'
import store from "./store/index.js";
import "./assets/css/reset.scss";
import Modal from './components/test/test.vue'
Vue.use(Modal)
Vue.prototype.$layer = layer(Vue);
Vue.use(toastRegistry)
Vue.use(ElementUi)
Vue.prototype.$axios = Axios
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
Axios.defaults.baseURL='http://192.168.0.108:9099'  //设置公共路径
// Axios.defaults.baseURL='http://192.168.1.111:9099'  //设置公共路径
Axios.defaults.timeout=50000  //请求超时时间
Axios.defaults.headers.post['Content-Type']='application/json;charset=UTF-8'

