const fs = require('fs');
const path = require('path');

// 将a.txt 重命名为 b.txt
fs.rename('b.txt', 'a.txt', function(err) {

});

var obj = path.parse('c:\\www\\node\\jack\\index.html');
// root: 'c:\\',
// dir: 'c:\\www\\node\\jack',
// base: 'index.html',
// ext: '.html',
// name: 'index' 
console.log(obj);

