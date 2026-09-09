import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true } // 添加元信息表示需要认证
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    // 如果需要认证且未登录，则重定向到登录页面
    next('/login')
  } else if (to.path === '/login' && isAuthenticated) {
    // 如果已登录但尝试访问登录页面，则重定向到主页
    next('/home')
  } else {
    // 否则继续导航
    next()
  }
})

export default router