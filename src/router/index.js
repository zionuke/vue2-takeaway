/*
路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '@/pages/MSite/MSite'
import Search from '@/pages/Search/Search'
import Order from '@/pages/Order/Order'
import Profile from '@/pages/Profile/Profile'
import Login from '@/pages/Login/Login'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  // 所有路由
  routes: [
    { // 默认重定向至/msite
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: MSite,
      // 元数据，用于控制是否显示底部导航栏
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
