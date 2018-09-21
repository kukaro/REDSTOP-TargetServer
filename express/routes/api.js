var express = require('express');
var router = express.Router();

var jsonTest = require('../controllers/json-test/json-test');


/* GET home page. */
router.get('/', function (req, res, next) {
    var curUrl = req.originalUrl.split('/');

    var data;
    switch (curUrl[2]) {
        case 'json-test':
            data = jsonTest.jsonTest(curUrl);
            break;
        default:
        /*pass*/
    }
    res.send(data);
});

module.exports = router;
