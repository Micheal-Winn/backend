var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // console.log("Route /")
  res.render('index', { title: 'Express' });
});

router.get('/hello', function(req, res, next) {
  console.log("Hello /")
  // res.send("hello");
  next();
});

router.get('/hello', function(req, res, next) {
  console.log("Hello /")
  res.send("Another Hello");
});

module.exports = router;
