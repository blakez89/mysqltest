// this can be the database file
// need a server file also

//make end points like get users, get posts etc
// make the routes and the controllers
// make middleware

const config = require('./config')

const mysql = require('mysql');
const connection = mysql.createConnection(config.db);

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

function queryDatabase(sql,callback){
 connection.query(sql,callback)
}

const db = {

  queryDatabase

}



module.exports = db
