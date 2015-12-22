var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res, next) {
  var db = req.db
  db.serialize(function() {
    resultArr = [];
    db.each('SELECT rowid AS id, info FROM lorem', function(err, row) {
      console.log(row.id + ': ' + row.info);
      resultArr.push(row.info);
    }, function(done) {
      res.json(resultArr);
    });
  });
});

module.exports = router;
