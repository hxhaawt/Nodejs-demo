/**
 * Created by hxh on 2017/7/22.
 */

const http = require('http');
const querystring = require('querystring');



http.createServer(function (req, res) {

    if (req.url.indexOf('?') != -1){
        
        let str
        ,data = {}
        ,index
        ,json
        ;
        
        decodeURI(req.url);
        index = req.url.indexOf('?');
        // 数据 user=jack&pass=1234
        str = req.url.substr(index + 1);

        json = querystring.parse(str);
        for (let value in json){
            data[ value ] = json[value] || "";
        }
        
        console.log( data );
    }

    res.write("aaa");
    res.end();

}).listen(8089);


