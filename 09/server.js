// 用express 框架，不是node.js中的模块
const express = require('express');
// 开户服务器
var server = express();

// 请求a.html时，返回 aaa; localhost:8089/a.html
server.use('/a.html', function (req, res) {
    // res.send({a:12, b: 23}); // 可以发送json数据
    res.send('aaa');
    res.end();
});

server.use('/b.html', function (req, res) {
    res.send('bbb');
    res.end();
});

// 监听端口
server.listen(8089);
