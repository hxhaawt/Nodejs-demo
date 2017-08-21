/**
 * Created by hxh on 2017/7/22.
 */


const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');

var users = {}; // {'jack': '1234'}


let server = http.createServer(function (req, res) {

    let str = '';

    req.on('data', function (data) {
        str += data;
    });
    req.on('end', function () {
        let obj = urlLib.parse(req.url, true);

        const url = obj.pathname;
        const getData = obj.query;
        const postData = querystring.parse(str);

        // 区分--访问的是接口还是文件
        if ( url == '/user') {
            // 接口
            switch (getData.act) {
                case 'reg':
                    // 检查用户名是否已经有了
                    if (users[getData.user]){
                        res.write('{"ok": false, "msg": "用户已经存在"}');
                    } else {
                        // 只是 简单检测
                        users[getData.user] = getData.pass;
                        res.write('{"ok": true, "msg": "注册成功"}');
                    }
                    break;

                case 'login':
                    if (users[getData.user] == null) {
                        res.write('{"ok": false, "msg": "用户不存在"}');
                    } else if( users[getData.user] != getData.pass ) {
                        res.write('{"ok": false, "msg": "密码错误"}');
                    } else {
                         res.write('{"ok": true, "msg": "登录成功"}');
                    }
                    break;

                default:
                    res.write('{"ok": false, "msg": "未知的act"}');
                    break;        
            }
            res.end();
        } else {
            
            // 文件
            let file_name = './www' + url;
            fs.readFile(file_name, function (err, data) {
                if ( err ){
                    res.write( '404' );
                } else {
                    res.write( data );
                }
                res.end();
            });  
        }

    });

});


server.listen(8080);    




