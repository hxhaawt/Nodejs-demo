const jade = require('jade');

// 调用不同的 jade 文件
// var str = jade.renderFile('./views/3.jade', {pretty: true});
// var str = jade.renderFile('./views/4.jade', {pretty: true});

// var str = jade.renderFile('./views/5.jade', {pretty: true});

var str = jade.renderFile('./views/6.jade', {
    pretty: true,
    name: 'blue'
});

// var str = jade.renderFile('./views/7.jade', {
//     pretty: true,
//     json: {
//         width: '200px',
//         height: '200px',
//         background: 'red'
//     },
//     classArr: ['aaa', 'bbb']
// });

// var str = jade.renderFile('./views/8.jade', {
//     pretty: true,
//     a: 10,
//     b: 5
// });


console.log(str);

