/**
 * Created by hxh on 2017/7/22.
 */

const http = require('http');
const urlLib = require('url');


http.createServer(function (req, res) {

    if ( req.url && req.url.indexOf('?') != -1 ){

        let obj
        ,url
        ,data = {}
        ;
        obj = urlLib.parse(req.url, true);

        url = obj.pathname;
        data = obj.query;
        console.log(url, data);
        
    }

    res.write("aaa");
    res.end();

}).listen(8089);






