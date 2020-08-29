export const formatNum= function formatNum(num,decimals) {
    if (isNaN(num) || (!num && num !== 0)) {
        return '--'
    }
    // 默认为保留的小数点后两位
    let dec = decimals ? decimals : 2
    let tempNum = Number(num)
    let pointIndex = String(tempNum).indexOf('.') + 1 // 获取小数点的位置 + 1
    let pointCount = pointIndex ? String(tempNum).length - pointIndex : 0 // 获取小数点后的个数(需要保证有小数位)
    // 源数据为整数或者小数点后面小于decimals位的作补零处理
    if (pointIndex === 0 || pointCount <= dec) {
        let tempNumA = tempNum
        if (pointIndex === 0) {
            tempNumA = `${tempNumA}.`
            for (let index = 0; index < dec - pointCount; index++) {
                tempNumA = `${tempNumA}0`
            }
        } else {
            for (let index = 0; index < dec - pointCount; index++) {
                tempNumA = `${tempNumA}0`
            }
        }
        return tempNumA
    }
    let realVal = ''
    // 截取当前数据到小数点后decimals位
    realVal = `${String(tempNum).split('.')[0]}.${String(tempNum)
        .split('.')[1]
        .substring(0, dec)}`
    // 判断截取之后数据的数值是否为0
    if (realVal == 0) {
        realVal = 0
    }
    return realVal;
}