// commonjs 模块
// ESModule 
// 区分: commonjs引入模式时是赋值，esmodule是静态导入
const net = require('node:net');

// server
// 1.创建
const server = net.createServer((socket) => {
    // console.log(socket)
    // 监听客户端，客户端发送数据后，立即回复客户端
    socket.on('data', (dataFromClient) => {
        console.log(dataFromClient.toString('utf-8'))
        // 回复服务端
        socket.write('你好客户端！')
    })
})

// 2.启动(1-65536)
server.listen(3000, '127.0.0.1', () => console.log('server is listening on 3000 port!'))

// client