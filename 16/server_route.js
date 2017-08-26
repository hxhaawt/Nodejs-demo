
const express = require('express');

let server = express();

// 目录1-- /user/
let userRouter = express.Router();

userRouter.get('/1.html', function(req, res) {
    res.send('user11111');
})

userRouter.get('/2.html', function(req, res) {
    res.send('user22222');
})

server.use('/user', userRouter);



// 目录2 /article/
let articleRouter = express.Router();
server.use('/article', articleRouter);

articleRouter.get('/', function (req, res) {
    res.send('article--->');
})



server.listen(8089);

