var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
    res.end("hi from the home-page");
});
router.get('/userprofile', function(req, res, next) {

    const userObject = JSON.stringify({
        status: 'ok',
        result: {
            user: {
                username: "ankit madaan",
                email: "ankit_madaan@epam.com",
                address: 'street no 6 patel nagar'
            }
        }
    })

    res.setHeader('Content-Type', 'application/json')
    res.end(userObject);



});

module.exports = router;