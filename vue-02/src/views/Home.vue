<template>
  <div class="home-container">
    <h1>欢迎来到主页</h1>
    <button @click="handleLogout">退出登录</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()

    const handleLogout = () => {
      localStorage.removeItem('isAuthenticated')
      router.push('/login')
    }

    return {
      handleLogout
    }
  }
}
</script>

<style scoped>
.home-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}
button {
  background-color: #f44336;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
}
</style>