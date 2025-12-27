<template>
    <div class="common-layout">
        <el-container>
            <Sidebar class="bar"></Sidebar>
            <el-container>
                <el-header>
                    <Header></Header>
                </el-header>
                <el-main>
                    <AppMain></AppMain>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import AppMain from './components/AppMain.vue'
</script>

<style scoped lang="scss">
.common-layout {
    height: 100%;

    .bar-main {
        height: 100%;
        display: flex;
        flex-direction: row;

        .bar {
            // flex: 4;
            height: 100%;
        }
    }
}
</style>
