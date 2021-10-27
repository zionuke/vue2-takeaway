import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App'
import router from './router'
import store from './store'

import './mock/mockServer' // 加载mockServer即可

// 注册全局组件标签
Vue.component(Button.name, Button)  // 全局可使用<mt-button>标签

new Vue({
  el: '#app',
  render: h => h(App),
  router, // 使用vue-router
  store // 使用vuex
})
