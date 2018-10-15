var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:str', function(req, res, next) {
  let str = req.param("str");
  console.log(str);
  res.render('index', { title: 'Express' });
});

module.exports = router;
