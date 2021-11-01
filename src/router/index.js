/*
路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'

// import MSite from '@/pages/MSite/MSite'
// import Search from '@/pages/Search/Search'
// import Order from '@/pages/Order/Order'
// import Profile from '@/pages/Profile/Profile'
// import Login from '@/pages/Login/Login'
// import Shop from '@/pages/Shop/Shop'

const MSite = () => import('../pages/MSite/MSite.vue')
const Search = () => import('../pages/Search/Search.vue')
const Order = () => import('../pages/Order/Order.vue')
const Profile = () => import('../pages/Profile/Profile.vue')
const Login = () => import('@/pages/Login/Login')
const Shop = () => import('@/pages/Shop/Shop')

import ShopGoods from '@/pages/Shop/ShopGoods/ShopGoods'
import ShopRatings from '@/pages/Shop/ShopRatings/ShopRatings'
import ShopInfo from '@/pages/Shop/ShopInfo/ShopInfo'

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
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: 'goods',
          component: ShopGoods
        },
        {
          path: 'ratings',
          component: ShopRatings
        },
        {
          path: 'info',
          component: ShopInfo
        },
        { // 默认重定向至/shop/goods
          path: '',
          redirect: 'goods'
        }
      ]
    }
  ]
})

/*解决重复点击同一个标签实现路由跳转报错问题：下面三行语句解决报错问题
* Uncaught (in promise) NavigationDuplicated
* {_name: “NavigationDuplicated”, name: "NavigationDuplic}的报错问*/
const VueRouterReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err);
}
