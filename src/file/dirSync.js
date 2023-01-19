const fs = require('node:fs')

// 同步的逻辑会阻塞后续代码的执行
const result = fs.mkdirSync(`${__dirname}/dirSync`)
console.log(result)

fs.rmdirSync(`${__dirname}/dirSync`)

const files = fs.readdirSync(__dirname)
console.log(files)