const express = require('express');
const expressStatic = require('express-static');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const consolidate = require('consolidate');
const bodyParser = require('body-parser');
const expressRoute = require('express-route');
const multer = require('multer');
const multerObj = multer({dest: './static/upload'});


var server = express();
server.listen(8080);


// 1. 获取请求数据
server.use(multerObj.any());
server.use(bodyParser.urlencoded());

// 2. cookie session
(function () {

    let keys = [];
    for (let i=0; i<10000; i++){
        keys[i] = "a_" + Math.random();
    }
    server.use(cookieParser());
    server.use(cookieSession({
        name: 'sess_id',
        keys: keys,
        maxAge: 20*60*1000  // 20分钟
    }));

})();


// 3.模板
server.engine('html', consolidate.ejs);
server.set('views', 'template');
server.set('view engine', 'html');



// 4. route
server.use('/', require('./route/web.js')());
server.use('/admin/', require('./route/admin.js')());

// 5.定义静态数据默认访问的目录
server.use(expressStatic('./static/'));



