// 到处的时候该怎么赋值
const a = {
    name: 'pjw'
}
function test() {

}
// module.exports = a
// console.log(module)
// 简写成
module.exports = {
    a,
    // test: test
    test
}

// 只适合一个变量导出
// module.exports = test