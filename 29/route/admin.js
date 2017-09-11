const express=require('express');
const common = require('../libs/common');
const mysql = require('mysql');

// 链接数据库
let db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'learn'
});


module.exports=function (){

    let router = express.Router();

    //检查登录状态
    router.use((req, res, next)=>{

        if(!req.session['admin_id'] && req.url !== '/login'){ //没有登录
            res.redirect('/admin/login');
        }else{
            next();
        }
    });

    router.get('/login', (req, res) => {

        res.render('admin/login.ejs', {});
    });

    router.post('/login', (req, res)=>{
        const username = req.body.username;
        const password = common.md5(req.body.password);

        // data 是一个数组
        db.query(`SELECT * FROM admin_table WHERE username='${username}'`, (err, data) => {
            if ( err ) {
                console.log(err);
                res.status(500).send('database error').end();
            } else {
                if ( data.length ===0) {
                    res.status(400).send('no this admin').end();
                } else {
                    if ( data[0].password === password) {
                        // 成功
                        // 设置session,记录用户已经登录
                        req.session['admin_id'] = data[0].ID;

                        // res.send('login success').end();
                        res.redirect('/admin/');
                    } else {
                        res.status(400).send('this password is error').end();
                    }
                }
            }
        });
    });

    router.get('/', (req, res) => {
        res.render('admin/index.ejs').end();
    });

    router.get('/banners', (req, res) => {

        switch ( req.query.act ) {

            case 'mod':

                db.query(`SELECT * FROM banner_table WHERE ID=${req.query.id}`, (err, data) => {
                    if ( err ) {
                        res.status(500).send('database error--1').end();
                    } else if(data.length === 0) {
                        res.status(404).send('data not found').end();
                    } else {

                        db.query(`SELECT * FROM banner_table`, (err, banners) => {
                            if ( err ) {
                                res.status(500).send('database error--2').end();
                            } else {
                                res.render('admin/banners.ejs', {
                                    mod_data: data[0],
                                    banners});
                            }
                        });
                    }
                });
                break;

            case 'del':

                db.query(`DELETE FROM banner_table WHERE ID=${req.query.id} `, (err, data) => {
                    if ( err ) {
                        res.status(500).send('database error').end();
                    } else {
                        res.redirect('/admin/banners');
                    }
                });
                break;

            default:

                db.query(`SELECT * FROM banner_table`, (err, data) => {
                    if ( err ) {
                        res.status(500).send('database error').end();
                    } else {
                        res.render('admin/banners.ejs', {banners: data});
                    }
                });
                break;
        }

    });
    router.post('/banners', (req, res) => {

        const title = req.body.title;
        const description = req.body.description;
        const href = req.body.href;
        // console.log(title, description, href);

        if (!title || !description || !href) {
            res.status(400).send('arg error').end();
        } else {

            if (req.body.mod_id) {  // 修改
                db.query(`UPDATE banner_table SET \
                    title='${req.body.title}',\
                    description="${req.body.description}",\
                    href="${req.body.href}" \
                    WHERE ID=${req.body.mod_id} `,
                    (err, data) => {
                        if ( err ) {
                            res.status(500).send('database error').end();
                        } else {
                            res.redirect('/admin/banners');
                        }
                    }
                  );

            } else {    // 增加

                //    先校验数据 再存入数据库
                db.query(`INSERT INTO banner_table (title, description, href) VALUE ('${title}', '${description}', '${href}')`,
                    (err, data) => {
                        if ( err ) {
                            res.status(500).send('database error').end();
                        } else {
                            res.redirect('/admin/banners');
                        }
                });
            }

        }
    });

    return router;
};

























