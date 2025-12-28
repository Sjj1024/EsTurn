import { ElMessage } from 'element-plus'

// single message tips
let messageDom: any = null
export const oneMessage: any = (options: any) => {
    if (messageDom) messageDom.close()
    messageDom = ElMessage(options)
}

const typeArr = ['success', 'error', 'warning', 'info']
typeArr.forEach((type) => {
    oneMessage[type] = (options: any) => {
        if (typeof options === 'string') options = { message: options }
        options.type = type
        return oneMessage(options)
    }
})
