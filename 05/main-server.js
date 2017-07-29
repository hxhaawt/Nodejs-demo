
const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');

let server = http.createServer(function (req, res) {

    // GET 数据接收方法
    let obj = urlLib.parse(req.url, true);
    let url = obj.pathname;
    const getData = obj.query;


    // POST 数据接收方法
    let str = '';
    req.on('data', function (data) {
        str += data;
    });
    req.on('end', function () {
        
        console.log( str );
        const postData = querystring.parse( str );

        // console.log("url: " + url);
        // console.log('get: ')
        // console.log(getData);
        // console.log('post: ');
        // console.log(postData);

        // console.log(url, getData, postData);
        
        let file_name = './www' + url;
        fs.readFile(file_name, function (err, data) {
            if ( err ){
                res.write('404');
            } else {
                res.write( data );
            }

            res.end();
        })

    });

});

server.listen(8089);



