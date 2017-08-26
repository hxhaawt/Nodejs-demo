// 运行这个文件配合 upload.html就可以上传文件到
// 硬盘里

const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const fs = require('fs');
const pathLib = require('path');

let server = express();

let multerObj = multer({
    dest: './www/upload'
});

server.use(multerObj.any());

server.post('/', function(req, res) {
    // req.files 是通过 post 上传的文件
    console.log(req.files);

    // 为上传上来的文件名加上后缀 如 + .png
    let newName = req.files[0].path + pathLib.parse(req.files[0].originalname).ext;

    fs.rename(req.files[0].path, newName, function ( err ) {
        if (err) {
            res.send("上传失败");
        }else {
            res.send("上传成功");
        }
    })


})



server.listen(8088);







