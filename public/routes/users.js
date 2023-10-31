const express = require('express');
const app = express();
const router = express.Router();
const db = require('./config');
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public','views','node' )));

 // View
 app.post('/add', function(req,res){
  
  var id = req.body.id;
  var name = req.body.name;
  // var phone = req.body.txtPhone;
  // var message = req.body.txtMsg;
 
  var TableName = "customers";
 
  var Insert_query = `INSERT INTO ${TableName} (id, name) VALUES ?`;
   
  // multiple Values to be inserted
     var values = [ 
       [id,name]
    
       ];
  
     db.query(Insert_query,[values], function(err, result) {
        if (err) throw err;
        console.log('record inserted :' );
        console.log(result.insertName);
        res.redirect('/');
      });
  
  //select query to show table data
      var show_contacts = `SELECT * FROM ${TableName}`
      db.query(show_contacts, function (err, result, fields) {
  
          if (err) throw err;
      
          console.log("Available records in database: ");
          console.log(result);
      
        });
 
   //console.log(name, Email, phone, message);
   //res.sendFile(path.join(__dirname+'/public/views/home/contact.html'));
   //res.sendFile(path.join(__dirname+'/public/views/home/contact.html'));
 
   
  
   
   });

module.exports = app;