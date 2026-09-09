<style>

</style>




<script setup>



</script>

<template>
    <div>
        <h1>School</h1>
        <el-row>
            <el-col :span="5">
            <p>
                <router-link to="/school/test1">Test1</router-link>




                
            </p>
            <p>
                <router-link to="/school/test2">Test2</router-link>
            </p>
            </el-col>
            <el-col :span="19">
                <router-view></router-view>
            </el-col>
        </el-row>    
    </div>


</template>

