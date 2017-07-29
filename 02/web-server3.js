
const http = require('http');
// import http from 'http'

// req--请求 输入-请求的信息
// res--响应 输出的数据
var server = http.createServer(function (req, res) {
    
    switch(req.url){
        case '/1.html' :
            res.write("111");
            break;

        case '/2.html' :
            res.write("222");
            break;

        default :
            res.write('404');
            break;    
    }

    

    res.end();

});

// 监听---端口
server.listen(8089);









