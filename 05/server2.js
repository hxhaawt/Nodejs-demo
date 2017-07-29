/**
 * Created by hxh on 2017/7/22.
 */

const http = require('http');
const querystring =require('querystring');

http.createServer(function (req, res) {
    
    let str = '';  // 接收数据
    let i = 0;
    // post--数据是分段发送的
    // data -- 有一段数据就会发生一次（会运行很多次）
    req.on('data', function(data) {
        // console.log(`第 ${i++} 次收到数据`);
        // decodeURI(data);
        str += data;
    });

    // end-- 数据全部到达（一次）
    req.on('end', function() {
        
        // console.log(str.toString());
        // 解决输出中文乱码问题
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});  
        res.write( decodeURI(str) );
        res.end();

        console.log( querystring.parse(str, true) );
    });

}).listen(8089);














