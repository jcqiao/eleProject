import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'

//路由懒加载
const Login = () => import("../views/login/Login.vue")

const Home = () => import("../views/home/Home.vue")
const Order = () => import("../views/order/Order.vue")
const Profile = () => import("../views/profile/Profile.vue")

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      component: () => import('../views/Index.vue'),
      children:[
        {
          path: '',
          redirect: '/home'
        },
        {
          path: 'home',
          component: () => import("../views/home/Home.vue")
        },
        {
          path: 'order',
          component: () => import("../views/order/Order.vue")
        },
        {
          path: 'profile',
          component: () => import("../views/profile/Profile.vue")
        },
      ]
    },
   
    {
      path: '/index',
      component: () => import('../views/Index.vue')
    },
    {
      path: '/login',
      component: Login
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//全局守卫
// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.ele_login ? true : false
//   if (to.path == "/login") {
//     next()
//   }else {
//     isLogin ? next() : next('/login')
//   }
// })

export default router
