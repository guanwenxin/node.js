const http = require('http')
const path = require('node:path')
const fs = require('node:fs')
const { saveFile } = require('./util')

const port = 3000;
const host = '127.0.0.1'

// 1.根据请求路径进行路由
const router = [
    {
        path: '/',
        handler: (res, query) => { 
            console.log(query)
            res.end(JSON.stringify(query))
        }
    },
    {
        path: '/weather',
        handler: (res, query) => { 
            // TODO: 网络请求，数据库查询
            console.log(query)
            res.end(JSON.stringify(query))
         }
        },
        {
            path: '/upload',
            handler: (res, query, req) => {
                // 将客户端上传的文件保存至本地
                const filename = query?.filename || 'not'
                const canWrite = saveFile(filename)
                // req.pipe(canWrite)
                req.on('data', (chunk) => {
                    console.log(chunk.toString('utf-8'))
                })
                res.end('保存成功')
            }
    }
]
// 2.查询参数的解析
const server = http.createServer((req, res) => {

    const splitUrl = req.url.split('?');
    // splitUrl ['/', 'name=pjw&password=123456']
    const inComePath = splitUrl[0]
    const queryPair = {}
    if (splitUrl.length === 2) {
        const query = splitUrl[1]
        query.split('&').forEach(pairStr => {
            const pairArr = pairStr.split('=')
            queryPair[pairArr[0]] = pairArr[1]
        })
    }
    // 路由逻辑
    router.forEach(route => {
        if (inComePath === route.path) {
            route.handler(res, queryPair, req)
        }
    })
})

server.listen(port, host, () => console.log('web服务器成功启动，http://127.0.0.1:3000'))