// 用express 框架，不是node.js中的模块
const express = require('express');
// 开户服务器
var server = express();

// 
/*
server.get('/', function (req, res) {
    
    console.log('有GET');
});

server.post('/', function (req, res) {
    
    console.log('有POST')
});
*/

server.use('/', function (req, res) {
    
    console.log('有USE')
});



// 监听端口
server.listen(8089);
