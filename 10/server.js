const express = require('express');
const bodyParser = require('body-parser');

var server = express();

server.listen(8089);




// // get 
// server.use('/', function (req, res) {
//     // get
//     console.log( req.query );
// });


server.use(bodyParser.urlencoded({
    extended: false,    // 是否用扩展模式
    limit: 2*1024*1024  // 限制大小 2M, 自己设定
}));

// post 
server.use('/', function (req, res) {
    
    console.log( req.body );
});



