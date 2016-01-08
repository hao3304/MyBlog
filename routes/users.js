var express = require('express');
var router = express.Router();
var db = require("../config").db;

db.collection("test").insert({name:"test"}, function (err, result) {
  console.log(result);
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
