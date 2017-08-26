const mysql = require('mysql');

// 1.连接服务器
// createConnection(哪参服务器，用户名，密码，哪个库)
let db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    // port: 3308,
    database: '20170824'
});

// 2.查询
// query(干什么，回调函数)
// SELECT * FROM `user_table`;
db.query(" SELECT `username` FROM `user_table`; ", (err, data) => {
    if ( err ) {
        console.log('出错了...', err);
    } else {
        console.log('成功：', JSON.stringify(data, null, 4));
    }
});

// console.log(db);
