var express = require('express');
var router = express.Router();
var db = require('../db')

/* GET users listing. */
router.get('/', function(req, res, next) {

  let sql = 'SELECT * FROM users';
  let callback = function (err,rows){
    if(err) throw err;
    
    let users = rows.map(user=>user.name)
    console.log(users)

    res.status(200).send({data:users});
    
    }


  db.queryDatabase(sql,callback)
  

});

module.exports = router;
