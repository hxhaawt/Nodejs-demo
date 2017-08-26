
const express = require('express');
const static = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
// 处理post 传递过来的数据
const bodyParser = require('body-parser');
// 两个 老师模板框架
const ejs = require('ejs');
const jade = require('jade');
// 处理post传递过来的文件
const multer = require('multer');

let server = express();

let multerObj = multer({
    // 表示 将文件存储到什么位置 
    dest: './www/upload'
});



server.listen(8080);
// 1.解析cookie
server.use(cookieParser("sdfasfe1232444awd331"));


// 2.使用session
let arr = [];
for (let i=0; i<100000; i++) {
    arr.push("keys_"+Math.random());
}
server.use(cookieSession({
    name: 'test_sess_id',
    keys: arr,
    maxAge: 20*3600*1000
}));

// 3.post数据
server.use(bodyParser.urlencoded({
    extended: false
}));

server.use(multerObj.any());

// 用户请求
server.use('/', function(req, res, next) {
    // req.query 为用户 get 请求的数据
    // req.body 为用户 post 过来的数据 
    // req.files 为用户 post 过来的文件 
    
    console.log(req.query, req.body, req.files, req.cookies, req.session);



});




// 4.static数据
server.use(static('./www'));





