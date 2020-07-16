import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'

//路由懒加载
const Login = () => import("../views/login/Login.vue")

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/index'
    },
  {
    path: '/index',
    component: Index
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
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.ele_login ? true : false
  if (to.path == "/login") {
    next()
  }else {
    isLogin ? next() : next('/login')
  }
})

export default router
