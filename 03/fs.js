const fs = require('fs');


// fs.readFile(path[, options], callback);
fs.readFile('test.txt', function (err, data) {

    if(err){
        console.log(读取失败);
    } else {

        console.log(data.toString());
    }
});






