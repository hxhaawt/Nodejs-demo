const ejs = require('ejs');

let str = ejs.renderFile('./views/2.ejs', {
    name: 'blue',
    json: {
        arr: [
            {user: 'jack', pass: '1234'},
            {user: 'vue', pass: '3456'},
            {user: 'react', pass: '5678'},
        ]
    }
}, function(err, data) {
    console.log(data);
});


