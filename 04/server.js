/**
 * Created by hxh on 2017/7/22.
 */

const http = require('http');
http.createServer(function (req, res) {

    if ( req.url && req.url.indexOf('?') != -1 ){

        let str
        ,arr = []
        ,data = {}
        ,index
        ,tmp
        ;

        decodeURI(req.url);
        index = req.url.indexOf('?');
            
        // 数据 user=jack&pass=1234
        str = req.url.substr(index + 1);
        // arr[0]-->user=jack; arr[1]-->pass=1234 ...
        arr = str.split('&');

        for(let i=0, len=arr.length; i<len; i++){
            tmp = arr[i].split('=');
            if (tmp[0]){
                data[ tmp[0] ] = tmp[1] || "";
            }
        }
        
        console.log( data );
    }

    res.write("aaa");
    res.end();

}).listen(8089);


