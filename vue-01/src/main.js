import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './router'
import axios from 'axios'

//引入css样式
import 'element-plus/dist/index.css'

// 配置axios前缀
axios.defaults.baseURL = "/api"

const app = createApp(App)
app.provide('$axios',axios)
app.use(ElementPlus).use(router)
app.mount('#app')
