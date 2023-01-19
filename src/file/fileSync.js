const fs = require('node:fs') 
const path = require('node:path')


// 创建文件
// 1.通过参数控制文件是否创建
fs.writeFileSync(`${__dirname}/test.txt`, 'hello world\n', { flag: 'a' })
// console.log(process.stdout.fd)
// fs.writeFile(1 , 'hello world', (err) => {
//     console.log('进程')
// })


// 3.读文件
// 每次要把整个文件读取了，会占用大量内存
const fileData = fs.readFileSync(`${__dirname}/test.txt`)
console.log(fileData.toString('utf-8'))

// 2.删除文件
fs.unlinkSync(`${__dirname}${path.sep}test.txt`)