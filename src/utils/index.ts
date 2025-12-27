export const cf_token = import.meta.env.VITE_CFTOKEN
export const cf_account_id = import.meta.env.VITE_CFACCOUNTID
export const cf_s3_api = import.meta.env.VITE_CFS3API

export function timestampToTime(timestamp: number) {
    // 时间戳为10位需*1000，时间戳为13位不需乘1000
    var date = new Date(timestamp * 1000)
    var Y = date.getFullYear() + '-'
    var M =
        (date.getMonth() + 1 < 10
            ? '0' + (date.getMonth() + 1)
            : date.getMonth() + 1) + '-'
    var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
    var h = date.getHours() + ':'
    var m = date.getMinutes() + ':'
    var s = date.getSeconds()
    return Y + M + D + h + m + s
}
