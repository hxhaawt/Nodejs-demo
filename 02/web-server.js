
const http = require('http');
// import http from 'http'

var server = http.createServer(function (req, res) {
    console.log('server start...');
});

// 监听---端口
server.listen(8089);









