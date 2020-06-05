import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from '../pages/Home'
import Classify from '../pages/Classify'
import Buy from '../pages/Buy'
import ShopCart from '../pages/ShopCart'
import Person from '../pages/Person'
import Formpage from '../pages/Formpage'
import Section0 from '../pages/Classify/section0'
import Section1 from '../pages/Classify/section1'
import Section2 from '../pages/Classify/section2'

export const constantRoutes = [
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
    name: 'classify',
    componentShow: false,
    children: [
      {
        name: 'section0',
        path: 'section0',
        component: Section0
      },
      {
        name: 'section1',
        path: 'section1',
        component: Section1
      },
      {
        name: 'section2',
        path: 'section2',
        component: Section2
      }
    ]
    
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
  // 搜索页面
  {
    path: '/formpage',
    component: Formpage,
    name:'Formpage',
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