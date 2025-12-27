<template>
    <div class="baseBox">
        <div class="baseLine">
            <span class="lineAble">链接规则：</span>
            <el-select
                v-model="userStore.cdnLink"
                class="m-2"
                placeholder="默认Staticaly"
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
        value: `https://cdn.staticaly.com/gh/{{owner}}/{{repo}}@{{branch}}/{{path}}`,
        label: 'Staticaly',
    },
    {
        value: `https://jsd.cdn.zzko.cn/gh/{{owner}}/{{repo}}@{{branch}}/{{path}}`,
        label: 'ChinaJsDelivr',
    },
    {
        value: `https://cdn.jsdelivr.net/gh/{{owner}}/{{repo}}@{{branch}}/{{path}}`,
        label: 'jsDelivr',
    },
    {
        value: `https://github.com/{{owner}}/{{repo}}/raw/{{branch}}/{{path}}`,
        label: 'GitHub',
    },
    {
        value: 'https://{{owner}}.github.io/{{repo}}/{{path}}',
        label: 'GitHub IO',
    },
]

const handlerCdn = (val: string) => {
    // userStore.setFileCdn(val)
    console.log('设置的fileCdn模板是:', val)
    const resCdn = val
        .replace('{{owner}}', userStore.gitName)
        .replace('{{repo}}', userStore.gitRepo)
        .replace('{{branch}}', userStore.gitBranch)
        .replace('{{path}}', '')
    console.log('真正的cdn值：', resCdn)
    userStore.setFileCdn(resCdn)
    console.log('设置后的cdn值是:', userStore.fileCdn)
}

const autoLink = ref(false)
const autoLinkOpt = [
    {
        value: true,
        label: '开启',
    },
    {
        value: false,
        label: '关闭',
    },
]

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

// 图片水印设置
const waterSet = ref('暂不支持设置')

const waterOpt = [
    {
        value: 'souLink',
        label: '暂不支持设置',
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
