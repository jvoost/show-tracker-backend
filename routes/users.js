var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function (req, res, next) {
  var db = req.db;
  db.serialize(function () {
    var resultArr = [];

    /*

    db.run('CREATE TABLE lorem (info TEXT)');
    var stmt = db.prepare('INSERT INTO lorem VALUES (?)');

    for (var i = 0; i < 10; i++) {
      stmt.run('Ipsum ' + i);
    }

    stmt.finalize();
    */

    db.each('SELECT rowid AS id, info FROM lorem', function (err, row) {
      resultArr.push(row.info);
    }, function (done) {
      res.json(resultArr);
    });
  });
});

module.exports = router;
