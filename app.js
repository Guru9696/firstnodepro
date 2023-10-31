// Requiring module
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const db = require('./config');
var bodyParser = require('body-parser');
//var usersRouter = require('./routes/users');

// var helmet = require('helmet');
// var rateLimit = require("express-rate-limit");


// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100 // limit each IP to 100 requests per windowMs
// });


//var db = new sqlite3.Database('./database/employees.db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// app.use(helmet());
// app.use(limiter);

/*
var sqlite3 = require('sqlite3').verbose();
var http = require('http');

var helmet = require('helmet');
var rateLimit = require("express-rate-limit");

var server = http.createServer(app);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
*/

//app.use(express.static(__dirname='/node/firstnodepro/public'));
//app.use('/css', express.static('/node/firstnodepro/public/views/node/css'));
//for all css -file
app.use(express.static(path.join(__dirname, 'public','views','home' )));

app.use(express.static(path.join(__dirname, 'public','views','node' )));
app.use(express.static(path.join(__dirname, 'public','css' )));
app.use(express.static(path.join(__dirname, 'public','js' )));
app.use(express.static(path.join(__dirname, 'public','routes' )));

app.use(express.static(path.join(__dirname, 'public','views','common' )));
app.use(express.static(path.join(__dirname, 'public','views','django' )));
app.use(express.static(path.join(__dirname, 'public','views','java' )));
app.use(express.static(path.join(__dirname, 'public','views','ml' )));
app.use(express.static(path.join(__dirname, 'public','views','javascript' )));
app.use(express.static(path.join(__dirname, 'public','views','node','elearn','css' )));
app.use(express.static(path.join(__dirname, 'public','views','node','elearn' )));
app.use(express.static(path.join(__dirname, 'public','views','node','recipe_book','scss' )));
app.use(express.static(path.join(__dirname, 'public','views','node','recipe_book' )));
app.use(express.static(path.join(__dirname, 'public','views','node','User_login','css' )));
app.use(express.static(path.join(__dirname, 'public','views','node','User_login' )));


//for perticuler css file
/*
app.get('/css/assi6.css', (req,res) =>{

  res.sendFile(path.join(__dirname,'public','css','assi6.css'));
});
*/
router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/views/home/index.html'));
    //__dirname : It will resolve to your project folder.
  });
   
  router.get('/about',function(req,res){
    res.sendFile(path.join(__dirname+'/public/views/home/about.html'));
  });
   
  router.get('/contact',function(req,res){
    res.sendFile(path.join(__dirname+'/public/views/home/contact.html'));
  });
  // View
app.post('/contact', function(req,res){
  
 var name = req.body.txtName;
 var email = req.body.txtEmail;
 var phone = req.body.txtPhone;
 var message = req.body.txtMsg;

 var TableName = "contactform";

 var Insert_query = `INSERT INTO ${TableName} (name, emails, mobileno, message) VALUES ?`;
  
 // multiple Values to be inserted
    var values = [ 
      [name, email, phone, message]
     ];
 
    db.query(Insert_query,[values], function(err, rows) {
       if (err) throw err;
       console.log('record inserted :'+ rows.affectedRows );
       
     });

  //res.sendFile(path.join(__dirname+'/public/views/home/contact.html'));
  res.redirect('/');
  
  });

  router.get('/node_index',function(req,res){
    res.sendFile(path.join(__dirname+'/public/views/node/node_index.html'));
  });

  router.get('/django_index',function(req,res){
    res.sendFile(path.join(__dirname+'/public/views/django/django_index.html'));
  });

  router.get('/java_index',function(req,res){
    res.sendFile(path.join(__dirname+'/public/views/java/java_index.html'));
  });

  router.get('/ml_index',function(req,res){
    res.sendFile(path.join(__dirname+'/public/views/ml/ml_index.html'));
  });

  router.get('/javascript_index',function(req,res){
    res.sendFile(path.join(__dirname+'/public/views/javascript/javascript_index.html'));
  });
// node js folder routers
router.get('/assi1',function(req,res){
  res.sendFile(path.join(__dirname+'/public/views/node/student.html'));
});
  router.get('/assi2',function(req,res){
    res.sendFile(path.join(__dirname+'/public/views/node/emp1.html'));
  });
  router.get('/assi3',function(req,res){
    res.sendFile(path.join(__dirname+'/public/views/node/assi3.html'));
  });

  router.get('/assi4',function(req,res){
    res.sendFile(path.join(__dirname+'/public/views/node/assi4.html'));
  });
  router.get('/assi5',function(req,res){
    res.sendFile(path.join(__dirname+'/public/views/node/assi5.html'));
  });
  router.get('/assi6',function(req,res){
    res.sendFile(path.join(__dirname+'/public/views/node/assi6.html'));
  });
  // router.get('*',function(req,res){
  //   res.sendFile(path.join(__dirname+'/public/views/node/assi6.html'));
  // });
  router.get('/assi8',function(req,res){
    res.sendFile(path.join(__dirname+'/public/views/node/assi8.html'));
  });
   // add record to customer
 app.post('/createdb', function(req,res){
  
  var new_database = req.body.databaseName;

  var createQuery = `CREATE DATABASE ${new_database}`;

 
  db.query(createQuery, (err) => {
      if(err==1) throw  "Couldn't create";

      console.log(new_database+" Database Created Successfully !");
      res.sendFile(path.join(__dirname+'/public/views/node/assi8.html'));
  });

  });
app.post('/createtable', function(req,res){
  
    var new_database = req.body.databaseName;
    var new_table = req.body.tableName;
  
    var createQuery = `CREATE DATABASE ${new_database}`;
  
   
    db.query(createQuery, (err) => {
        if(err==1) throw  "Couldn't create";
  
        console.log(new_database+" Database Created Successfully !");
      });

     var useQuery = `USE ${new_database}`;
        db.query(useQuery, (error) => {
            if(error) throw error;
  
            console.log("Using Database"+new_database);
          })


  var create_table = `CREATE TABLE ${new_table} (name VARCHAR(255), address VARCHAR(255))`;

  db.query(create_table, (err) => {
    if(err==1) throw "Couldn't create";
    console.log(new_table+" Table created");
  });
   
  res.sendFile(path.join(__dirname+'/public/views/node/assi8.html'));
 });

 app.post('/alltable', function(req,res){
  
  var new_database = req.body.databaseName;

  var useQuery = `USE ${new_database}`;
      db.query(useQuery, (error) => {
          if(error) throw error;

          console.log("Using Database"+new_database);
        })

  //select query to show table in database
      var show_tables = `show tables`
      db.query(show_tables, function (err, result, fields) {
  
          if (err) throw err;
      
          console.log("Available Tables in database: ");
          console.log(result);
      
        });
        res.sendFile(path.join(__dirname+'/public/views/node/assi8.html'));

  });
  app.post('/alldatabase', function(req,res){
  
  
    //select query to show table in database
        var show_database = `SHOW DATABASES`
        db.query(show_database, function (err, result, fields) {
    
            if (err) throw err;
        
            console.log("Available  All Databases: ");
            console.log(result);
        
          });
          res.sendFile(path.join(__dirname+'/public/views/node/assi8.html'));
  
    });
  


  router.get('/assi9',function(req,res){
    res.sendFile(path.join(__dirname+'/public/views/node/assi9.html'));
  });

  // add record to customer
 app.post('/add', function(req,res){
  
  var id = req.body.id;
  var name = req.body.name;
  // var phone = req.body.txtPhone;
  // var message = req.body.txtMsg;
 
  var TableName = "customers";

// Create a new Table
  
  var table_query = `CREATE TABLE ${TableName} (id INT(3), name VARCHAR(25))`;

  db.query(table_query, (err) => {
    if(err==1) throw "Couldn't create";
    console.log(TableName+" Table created");
  });

 
  var Insert_query = `INSERT INTO ${TableName} (id, name) VALUES ?`;
   
  // multiple Values to be inserted
     var values = [ 
       [id,name]
    
       ];
  
     db.query(Insert_query,[values], function(err,rows) {
        if (err) throw err;
        console.log('record inserted :'+ rows.affectedRows );
       // console.log(result.insertN);
        res.redirect('/');
      });
  
  //select query to show table data
      var show_contacts = `SELECT * FROM ${TableName}`
      db.query(show_contacts, function (err, result, fields) {
  
          if (err) throw err;
      
          console.log("Available records in database: ");
          console.log(result);
      
        });
   });
    // View all records from customer table
 app.post('/view', function(req,res){

  var id = req.body.id;
  var name = req.body.name;
  var TableName = "customers";

  //select query to show table data
      var show_contacts = `SELECT * FROM ${TableName}`
      db.query(show_contacts, function (err, result, fields) {
  
          if (err) throw err;
      
          console.log("Available records in database: ");
          console.log(result);
          res.redirect('/');
      
        });
   });
  // View specific record from customer table
  app.post('/view1', function(req,res){
  
    
    var name = req.body.name;
    var TableName = "customers";
   
    //select query to show table data
        var show_contacts = `SELECT * FROM ${TableName} WHERE name = ?`
        db.query(show_contacts,name, function (err, result, fields) {
    
            if (err) throw err;
        
            console.log("Available records in database: ");
            console.log(result);
            res.redirect('/');
        
          });
     });


  router.get('/assi10',function(req,res){
    res.sendFile(path.join(__dirname+'/public/views/node/assi10.html'));
  });

  // add record to student
 app.post('/addstudent', function(req,res){
  
  var name = req.body.name;
  var address = req.body.address;

  var TableName = "students";
 

// Create a new Table
  
  var table_query = `CREATE TABLE ${TableName} (name VARCHAR(255), address VARCHAR(255))`;

  db.query(table_query, (err) => {
    if(err==1) throw "Couldn't create";
    console.log(TableName+" Table created");
  });

 
  var Insert_query = `INSERT INTO ${TableName} (name, address) VALUES ?`;
   
  // multiple Values to be inserted
     var values = [ 
       [name,address]
    
       ];
  
     db.query(Insert_query,[values], function(err,rows) {
        if (err) throw err;
        console.log('record inserted :'+ rows.affectedRows );
      
        
      });
      res.sendFile(path.join(__dirname+'/public/views/node/assi10.html'));
  
   });
   // add multiple record in student table
   app.post('/addmultistudent', function(req,res){
  
    var name1 = req.body.name1;
    var address1 = req.body.address1;
    var name2 = req.body.name2;
    var address2 = req.body.address2;
    var name3 = req.body.name3;
    var address3 = req.body.address3;
    var name4 = req.body.name4;
    var address4 = req.body.address4;
  
    var TableName = "students";
   
  
  // Create a new Table
    
    var table_query = `CREATE TABLE ${TableName} (name VARCHAR(255), address VARCHAR(255))`;
  
    db.query(table_query, (err) => {
      if(err==1) throw "Couldn't create";
      console.log(TableName+" Table created");
    });
  
   
    var Insert_query = `INSERT INTO ${TableName} (name, address) VALUES ?;`;
     
    // multiple Values to be inserted
       var values = [ 
         [name1,address1],
         [name2,address2],
         [name3,address3],
         [name4,address4]
      
         ];
    
       db.query(Insert_query,[values], function(err,rows) {
          if (err) throw err;
          console.log('record inserted :'+ rows.affectedRows );
        
          
        });
        res.sendFile(path.join(__dirname+'/public/views/node/assi10.html'));
    
     });
      // view all record in student table
   app.post('/viewstudent', function(req,res){
  
    var TableName = "students";
   
  
  
    //select query to show table data
        var show_contacts = `SELECT * FROM ${TableName}`
        db.query(show_contacts, function (err, result, fields) {
    
            if (err) throw err;
        
            console.log("Available records in database: ");
            console.log(result);
        
          });
          res.sendFile(path.join(__dirname+'/public/views/node/assi10.html'));
     });

     // delete specific records from student
     

     app.post('/deletestudent', function(req,res){
  
    
      var name = req.body.name;
  
      var TableName = "students";
  
            
          var D_query = `DELETE FROM ${TableName} WHERE name = ?`;
  
             db.query(D_query,name,(err, rows) => {
                  if(err==1) throw "Couldn't delete";
           
                 console.log('Number of rows deleted = ' + rows.affectedRows);
             });
  
            res.sendFile(path.join(__dirname+'/public/views/node/assi10.html'));
       });
   
     
  router.get('/assi11',function(req,res){
    res.sendFile(path.join(__dirname+'/public/views/node/assi11.html'));
  });

  app.post('/delete', function(req,res){
  
    
    var name = req.body.name;

    var TableName = "customers";
   
    //select query to show table data
        var show_contacts = `SELECT * FROM ${TableName} `
        db.query(show_contacts, function (err, result, fields) {
    
            if (err) throw err;
        
            console.log("Before records in database: ");
            console.log(result);
           
        
          });
          
        var D_query = `DELETE FROM ${TableName} WHERE name = ?`;

           db.query(D_query,name,(err, rows) => {
                if(err==1) throw "Couldn't delete";
         
               console.log('Number of rows deleted = ' + rows.affectedRows);
           });


          db.query(show_contacts, function (err, result, fields) {
    
            if (err) throw err;
        
            console.log("After the operation records in database: ");
            console.log(result);
            
        
          });
          res.sendFile(path.join(__dirname+'/public/views/node/assi11.html'));
     });

     router.get('/assi13',function(req,res){
      res.sendFile(path.join(__dirname+'/public/views/node/User_login/index.html'));
    });
    router.get('/assi14',function(req,res){
      res.sendFile(path.join(__dirname+'/public/views/node/elearn/index.html'));
    });
    router.get('/assi15',function(req,res){
      res.sendFile(path.join(__dirname+'/public/views/node/recipe_book/index.html'));
    });

    

  //End  node js folder routers 
 // node ml folder routers
 router.get('/mlassi1',function(req,res){
  res.sendFile(path.join(__dirname+'/public/views/ml/assi1.html'));
});
router.get('/mlassi2',function(req,res){
  res.sendFile(path.join(__dirname+'/public/views/ml/assi2.html'));
});
router.get('/mlassi3',function(req,res){
  res.sendFile(path.join(__dirname+'/public/views/ml/assi3.html'));
});

router.get('/mlassi4',function(req,res){
  res.sendFile(path.join(__dirname+'/public/views/ml/assi4.html'));
});

router.get('/mlassi5',function(req,res){
  res.sendFile(path.join(__dirname+'/public/views/ml/assi5.html'));
});

router.get('/mlassi6',function(req,res){
  res.sendFile(path.join(__dirname+'/public/views/ml/assi6.html'));
});

router.get('/mlassi7',function(req,res){
  res.sendFile(path.join(__dirname+'/public/views/ml/assi7.html'));
});

router.get('/mlassi8',function(req,res){
  res.sendFile(path.join(__dirname+'/public/views/ml/assi8.html'));
});

router.get('/mlassi9',function(req,res){
  res.sendFile(path.join(__dirname+'/public/views/ml/assi9.html'));
});
router.get('/mlassi10',function(req,res){
  res.sendFile(path.join(__dirname+'/public/views/ml/assi10.html'));
});

router.get('/mlassi11',function(req,res){
  res.sendFile(path.join(__dirname+'/public/views/ml/assi11.html'));
});

router.get('/mlassi12',function(req,res){
  res.sendFile(path.join(__dirname+'/public/views/ml/assi12.html'));
});

router.get('/mlassi13',function(req,res){
  res.sendFile(path.join(__dirname+'/public/views/ml/assi13.html'));
});
router.get('/mlassi14',function(req,res){
  res.sendFile(path.join(__dirname+'/public/views/ml/assi14.html'));
});



//End  ml folder routers 

  // node javascript folder routers
  router.get('/mouse',function(req,res){
    res.sendFile(path.join(__dirname+'/public/views/javascript/mouse_event.html'));
  });
  router.get('/validation',function(req,res){
    res.sendFile(path.join(__dirname+'/public/views/javascript/validation_form.html'));
  });


  //End  javascript folder routers 


 /*
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/assi2',function(req,res){
    res.sendFile(path.join(__dirname+'emp.html'));
  });
   
  router.get('/assi3',function(req,res){
    res.sendFile(path.join(__dirname+'/assi3.html'));
  });

 */
/*
  app.get('*', (req, res) => {
    res.sendFile('index.html', {root: 'public'});

  });
  app.get('/assi2/', (req, res) => {
    res.sendFile('emp.html', {root: 'public/views'});
  });
  
  */

//add the router
app.use('/', router);
app.listen(process.env.port || 8001);
 
console.log('Running at Port 8001');
console.log('http://127.0.0.1:8001/');

module.exports = app;