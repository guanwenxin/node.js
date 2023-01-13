const path = require('node:path')

console.log(__dirname)
console.log(__filename)


const roadpath = path.join(__dirname, 'test.txt')
console.log(path.basename(roadpath))
console.log(roadpath)
console.log(path.extname(roadpath))
// 你需要程序的启动目录
// console.log(path.resolve('test.txt'))