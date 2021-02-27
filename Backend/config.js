var mysql = require('mysql');
var connection = mysql.createConnection({

host : "localhost",
user : "root",
password : "bp17#",
database: "bestquest4u"
});

connection.connect(function(err){
    if(!err) {
    console.log("Database is connected");
    } else {
    console.log(err);
    }
});



module.exports=connection;
