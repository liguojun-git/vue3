<style>

</style>










<script setup>

import { reactive } from 'vue';
import { ElMessage } from 'element-plus'

const btn1 = ()=>{
    ElMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}


const state = reactive({
  arr:[
    {
        name: 'theshy',
        achievement: '世界第一上单',
        age: 19
    },
    {
        name: '晴天',
        achievement: '世界最重上单',
        age: 18
    },
    {
        name: '小超梦',
        achievement: '峡谷第一上单',
        age: 19
    },
    {
        name: '369',
        achievement: '世界最废上单',
        age: 19
    },
    {
        name: '宙斯',
        achievement: '韩服第一上单',
        age: 19
    },
]
})

</script>

<template>
    <div class="div1">
        <ul>
            <li v-for="(persion,index) in state.arr">{{ persion.name}}--{{ index+1 }}</li>
        </ul>
    </div>
    <hr>

    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success" @click="btn1">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>

</template>

