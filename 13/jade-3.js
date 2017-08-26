const jade = require('jade');

// 调用不同的 jade 文件

// var str = jade.renderFile('./views/9.jade', {
//     pretty: true,
//     arr: ['aaa', 'bbb', 'ccc', 'ddd']
// });


// var str = jade.renderFile('./views/10.jade', {
//     pretty: true,
//     content: "<h2>你好</h2><p>对方水晶正在。。。</p>"
// });

// var str = jade.renderFile('./views/11.jade', {
//     pretty: true,
//     content: "<h2>你好</h2><p>对方水晶正在。。。</p>"
// });


var str = jade.renderFile('./views/12.jade', {
    pretty: true,
    content: "<h2>你好</h2><p>对方水晶正在。。。</p>"
});


console.log(str);

