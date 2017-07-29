const fs = require('fs');


fs.unlink('./tmp/hello.txt', function (err) {
    if (err) throw err;
    console.log('successfully deleted /tmp/hello.txt');
});





