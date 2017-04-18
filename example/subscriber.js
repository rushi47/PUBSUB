var mongo = require('mongodb');

var server = new mongo.Server('localhost', 27017);
var db = new mongo.Db('pubsub', server);





db.open(function(err) {							//open connection for DB
   if (err) throw err;

    db.collection('messages', function(err, collection) {
             if (err) throw err;
            
                var cursor=collection.find({},{tailable:true, await_data:true, numberOfRetries:-1}); //tailable cursor
                cursor.stream()
  .on('data', function(doc){
    console.log(doc);
  })
  .on('error', function(err){
    console.log(err);
  })
  .on('end', function(){
    // final callback
  });
  }); 
 });

