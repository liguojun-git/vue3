<script setup>

import { reactive,onMounted,inject } from 'vue';
import { ElMessage,ElMessageBox } from 'element-plus'

const axios = inject('$axios')
const state = reactive({
    categoryList : []
})


onMounted(() =>{
    axios.get('/category/list').then(resp=>{
        if (resp.data.code != '200') {
            ElMessage({
                message:resp.data.message,
                type:'warning'
            })
        }
        state.categoryList = resp.data.result;
        

    }).catch(resp =>{
        ElMessage({
            message: '获取类别列表失败',
            type: 'error'
        });
    }) 
})

const del_id = (id) =>{
    ElMessageBox.confirm(
        '此操作将永久删除该类别，是否继续?',
        '提示',
        {
            confirmButtonText:'确认',
            cancelButtonText:'取消',
            type:'warning'
        }
    ).then(() =>{
        // '/category/del/' + id
        // `/category/del/${id}`
        axios.delete(`/category/del/${id}`).then(resp=>{
            console.log(1);
            
        if (resp.data.code != '200') {
                ElMessage.error(resp.data.msg);
                return;
        }
        ElMessage.success(resp.data.msg);
        state.categoryList = state.categoryList.filter(item => item.cateId !== id);
    }).catch(resp =>{
        ElMessage({
            message: '输出失败',
            type: 'error'
        });
    }) 
    }).catch(resp =>{
        ElMessage({
            message: '已取消删除',
            type: 'info'
        });
    }) 
    
}



</script>

<template>
    <div>
        <h1>About</h1>
        <el-table :data="state.categoryList" style="width: 100%">
            <el-table-column prop="cateId" label="类别编号" ></el-table-column>
            <el-table-column prop="cateName" label="类别名称" ></el-table-column>
            <el-table-column prop="cateDesc" label="类别简介" ></el-table-column>
            <el-table-column label="操作">
                <template #default="{row}">
                <el-button type="info">编辑</el-button>
                <el-button type="danger" @click="del_id(row.cateId)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

