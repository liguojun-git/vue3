<template>
  <div>
    <h1>欢迎进入仪表盘</h1>
    <button @click="handleLogout">退出登录</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogout = () => {
  localStorage.removeItem('authToken')
  localStorage.removeItem('userRole')
  router.push('/login')
}
</script>