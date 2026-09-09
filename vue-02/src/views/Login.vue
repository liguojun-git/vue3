<template>
  <div class="login-container">
    <h1>登录</h1>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="username">用户名:</label>
        <input 
          id="username" 
          v-model="username" 
          type="text" 
          required
        />
      </div>
      <div class="form-group">
        <label for="password">密码:</label>
        <input 
          id="password" 
          v-model="password" 
          type="password" 
          required
        />
      </div>
      <button type="submit">登录</button>
      <p v-if="error" class="error-message">{{ error }}</p>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const username = ref('')
    const password = ref('')
    const error = ref('')
    const router = useRouter()

    const handleLogin = () => {
      if (username.value === 'admin' && password.value === '123') {
        // 登录成功
        localStorage.setItem('isAuthenticated', 'true')
        router.push('/home')
      } else {
        // 登录失败
        error.value = '用户名或密码错误'
      }
    }

    return {
      username,
      password,
      error,
      handleLogin
    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 50px;
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
button {
  background-color: #42b983;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.error-message {
  color: red;
  margin-top: 10px;
}
</style>