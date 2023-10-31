const mysql = require('mysql');

// create a new MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'raj@123',
  database: 'gj_programs'
});
var database ="gj_programs";
// connect to the MySQL database
connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL database:', error);
  } else {
    console.log('Connected to '+database+' database!');
  }
// use the query to Use a Database.
  let useQuery = `USE ${database}`;
  connection.query(useQuery, (error) => {
      if(error) throw error;

      console.log("Using Database : "+database);
    })
 
});
module.exports = connection;
// close the MySQL connection
//connection.end();
