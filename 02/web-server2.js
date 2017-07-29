
const http = require('http');
// import http from 'http'

// req--请求 输入-请求的信息
// res--响应 输出的数据
var server = http.createServer(function (req, res) {

    res.write("abc");

    res.end();

});

// 监听---端口
server.listen(8089);









