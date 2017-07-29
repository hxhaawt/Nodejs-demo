const fs = require('fs');


// fs.writeFile(path[, options], callback);
fs.writeFile('bb.txt', "this is write to file", function (err) {

    if(err){
        console.log('写失败');
    }
});






