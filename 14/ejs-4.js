const ejs = require('ejs');

let str = ejs.renderFile('./views/4.ejs', {
    name: 'blue',
    str: "<span>this is span label</span>"
}, function(err, data) {
    console.log(data);
});


