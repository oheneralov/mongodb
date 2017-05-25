var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/HomeTask2";

MongoClient.connect(url, function(error, db){

    if (error){
        console.log("Connection error!");
        throw err;
    }
    db.createCollection("Users2", function(err, result){
     if (err){
        throw err;
      }
      console.log("Table created!");
    });
    
    db.close();
})
