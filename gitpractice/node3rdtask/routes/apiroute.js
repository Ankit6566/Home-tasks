var express = require('express');
var router = express.Router();
/* GET users listing. */
const userdetails = require("../helpers/user-details");
const postdetails = require("../helpers/getposts");
router.get('/user', function(req, res, next) {
    if (req.cookies.auth_token === "qwertyuio") {
        next();
    } else
        res.send(401);
}, function(req, res, next) {
    const cookie = req.cookies;
    const username = cookie._username;
    const data = userdetails(username);
    res.setHeader("content-type", "application/json");
    res.send(data);
});
router.get('/user/posts', function(req, res, next) {
    if (req.cookies.auth_token === "qwertyuio") {
        next();
    } else
        res.send(401);
}, function(req, res, next) {
    const cookie = req.cookies;
    const username = cookie._username;
    const data = postdetails(username);
    res.setHeader("content-type", "application/json");
    res.send(data);
})
router.post('/user/posts/new', function(req, res, next) {
    if (req.cookies.auth_token === "qwertyuio") {
        next();
    } else
        res.send(401);
}, function(req, res, next) {
    const cookie = req.cookies;
    const username = cookie._username;
    const data = postdetails(username);
    data.posts.push(req.body.posttext);
    console.log(data.posts);
    res.status(301).header({ Location: '/userprofile' }).send({});

})
module.exports = router;