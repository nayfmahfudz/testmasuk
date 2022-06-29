let mysql = require("mysql2");
  
// create the connection to database
exports.db = mysql.createPool({
  connectionLimit: 15,
  queueLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'artikel'
});
 