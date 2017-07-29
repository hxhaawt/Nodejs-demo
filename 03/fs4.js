const fs = require('fs');
const http = require('http');

var server = http.createServer(function (req, res) {

    var file_name = './tmp' + req.url;
    
    fs.readFile(file_name, function (err, data) {
        if (err) {
            res.write('404');
        } else {
            res.write(data);
        }

        res.end();
    });

});



server.listen(8089);



