<template>
    <div class="baseBox">
        <div class="baseLine">
            <span class="lineAble">链接规则：</span>
            <el-select
                v-model="userStore.cdnLink"
                class="m-2"
                placeholder="默认GitHub"
                @change="handlerCdn"
            >
                <el-option
                    v-for="item in linkOpt"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </el-select>
        </div>
        <div class="baseLine">
            <span class="lineAble">压缩算法：</span>
            <el-select
                v-model="zipMethod"
                class="m-2"
                placeholder="默认亮白主题"
            >
                <el-option
                    v-for="item in zipMethodOpt"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </el-select>
        </div>
    </div>
    <div class="save-user">
        <el-button type="primary" @click="addLink">添加链接规则</el-button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const linkOpt = [
    {
        value: `https://gh-proxy.org/`,
        label: 'cloudflare',
    },
    {
        value: `https://hk.gh-proxy.org/`,
        label: 'cloudflare香港',
    },
    {
        value: `https://cdn.gh-proxy.org/`,
        label: 'Fastly',
    },
    {
        value: `https://edgeone.gh-proxy.org/`,
        label: 'edgeone',
    },
    {
        value: ``,
        label: 'GitHub',
    },
]

const handlerCdn = (val: string) => {
    // userStore.setFileCdn(val)
    console.log('设置的fileCdn模板是:', val)
    userStore.setFileCdn(val)
}

// 图片压缩
const zipMethod = ref('webP')
const zipMethodOpt = [
    {
        value: 'webP',
        label: 'webP',
    },
    {
        value: 'mozJPEG',
        label: 'mozJPEG',
    },
    {
        value: 'avif',
        label: 'avif',
    },
]

const addLink = () => {
    ElMessage({
        message: '暂不支持该操作',
        type: 'success',
    })
}
</script>

<style scoped lang="scss">
.save-user {
    text-align: center;
    margin-top: 20px;
}

.baseBox {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 10px;
    column-gap: 20px;

    .baseLine {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .lineAble {
            width: 100px;
            text-align: left;
        }
    }
}
</style>
