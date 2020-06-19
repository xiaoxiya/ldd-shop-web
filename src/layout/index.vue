<template>
<div>
    <el-container>
        <el-header class="header">Header</el-header>
        <el-container>
            <el-aside width="200px" class="container">Aside</el-aside>
            <el-main class="main">
                <router-view />
            </el-main>
        </el-container>
    </el-container>
</div>
</template>
<script>
export default {
     name:'Layout'
}
</script>
<style scoped lang="scss">
    .header {
        background: #ac3546;
    }
    .container {
        background: #409eff;
    }
    .main {
        background: #67c23a,
    }
</style>