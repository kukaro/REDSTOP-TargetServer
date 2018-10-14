var express = require('express');
var router = express.Router();

var jsonTest = require('../controllers/json-test/json-test');
var account = require('../controllers/account/account');


/* GET home page. */
router.get('/', function (req, res, next) {
    var curUrl = req.originalUrl.split('/');

    var data;
    switch (curUrl[2]) {
        case 'json-test':
            data = jsonTest.jsonTest(curUrl);
            break;
        case 'account':
            data = account.account(curUrl);
            break;
        default:
        /*pass*/
    }
    res.send(data);
});

router.post('/', function (req, res, next) {
    var curUrl = req.originalUrl.split('/');

    var data;
    switch (curUrl[2]) {
        case 'account':
            data = account.account(curUrl);
            break;
        default:
        /*pass*/
    }
    res.send(data);
});

module.exports = router;
