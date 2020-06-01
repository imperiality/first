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
import Section3 from '../pages/Classify/section3'
import Section4 from '../pages/Classify/section4'
import Section5 from '../pages/Classify/section5'
import Section6 from '../pages/Classify/section6'
import Section7 from '../pages/Classify/section7'
import Section8 from '../pages/Classify/section8'
import Section9 from '../pages/Classify/section9'
import Section10 from '../pages/Classify/section10'
import Section11 from '../pages/Classify/section11'

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
      },{
        name: 'section3',
        path: 'section3',
        component: Section3
      },{
        name: 'section4',
        path: 'section4',
        component: Section4
      },{
        name: 'section5',
        path: 'section5',
        component: Section5
      },{
        name: 'section6',
        path: 'section6',
        component: Section6
      },{
        name: 'section7',
        path: 'section7',
        component: Section7
      },{
        name: 'section8',
        path: 'section8',
        component: Section8
      },{
        name: 'section9',
        path: 'section9',
        component: Section9
      },{
        name: 'section10',
        path: 'section10',
        component: Section10
      },{
        name: 'section11',
        path: 'section11',
        component: Section11
      },
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