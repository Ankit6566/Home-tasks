var express = require('express');
var router = express.Router();
var fs = require("fs");
/* GET home page. */
//var html = fs.readFileSync("C:\Users\Ankit_Madaan\Desktop\assignments\gitpractice\express\my-app\public\static.html");
const checkLogin = require('../helpers/auth');
router.get('/', function(req, res, next) {
    const home = fs.readFileSync("public/static.html");
    res.setHeader("content-type", "text/html");
    res.send(home);
});
router.get('/login', function(req, res, next) {
    const cook = req.cookies;
    if (cook.is_loggedin) {
        const userprofile = fs.readFileSync("public/userprofile.html");
        res.setHeader("content-type", "text/html");
        return res.status(301).header({ Location: '/userprofile' }).send({});

    } else
        next();
}, function(req, res, next) {
    const login = fs.readFileSync("public/login.html");
    res.setHeader("content-type", "text/html");
    res.send(login);
});
router.post('/login', function(req, res, next) {
    console.log(req.body);
    const check = checkLogin(req.body.username, req.body.password);
    if (!req.body.username || !req.body.password)
        return res.status(301).header({ Location: '/login' }).send({});
    if (check) {
        res.cookie('is_loggedin', 'yes', { maxAge: 20000 });
        res.cookie('auth_token', 'qwertyuio', { httpOnly: true });
        res.cookie('_username', req.body.username);
        return res.status(301).header({ Location: '/userprofile' }).send({});
    }
    res.status(200).send("not ok");
});

router.get('/userprofile', function(req, res, next) {
    const cook = req.cookies;
    if (cook.is_loggedin) {
        next();
    } else
        return res.status(301).header({ Location: '/login' }).send({});
}, function(req, res, next) {
    const userprofile = fs.readFileSync("public/userprofile.html");
    res.setHeader("content-type", "text/html");
    res.send(userprofile);

});

module.exports = router;