<script setup>
// 引入组件
/**
 * import 
 * 引入组件 import Hmoe from ''
 * 引入样式 import '样式地址'
 * 引入函数 import {} from ''
 * js import 'js 地址',
 *            如果引入的是某个目录下的index.js,
 *            例如： 在src目录下有一个文件夹 router/index.js
 *            import './router'
 * 
 * 
 *   组件名称不区分大小写
 * 
 */
import Home from './views/Home.vue'

</script>

<style>

</style>

<template>

<!-- 路由标签
   router-link


   
   router-view
-->

<router-link to="/school">School</router-link>
<router-link to="/about">About</router-link>
<router-link to="/home">Home</router-link>
<router-view></router-view>

</template>
