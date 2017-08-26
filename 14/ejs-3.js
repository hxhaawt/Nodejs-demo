const ejs = require('ejs');

let str = ejs.renderFile('./views/3.ejs', {
    name: 'blue',
    str: "<span>this is span label</span>"
}, function(err, data) {
    console.log(data);
});


