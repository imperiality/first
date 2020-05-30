import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from '../pages/Home'
import Classify from '../pages/Classify'
import Buy from '../pages/Buy'
import ShopCart from '../pages/ShopCart'
import Person from '../pages/Person'
export const constantRoutes = [
  // 404
  {
    path: '/404',
    component: () => import('../404'),
    hidden: true
  },
  // 首页
  {
    path: '/',
    component: Home,
    name:'home',
    componentShow:true
  },
  // 分类
  {
    path: '/classify',
    component: Classify,
    name:'classify',
    componentShow:false
  },
  // 值得买
  {
    path: '/buy',
    component: Buy,
    name:'buy',
    componentShow:false
  },
  // 购物车
  {
    path: '/shopcart',
    component: ShopCart,
    name:'shopcart',
    componentShow:false
  },
  // 个人
  {
    path: '/person',
    component: Person,
    name:'person',
    componentShow:false
  },
]

const createRouter = () => new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes:constantRoutes
})
const router = createRouter()
export default router