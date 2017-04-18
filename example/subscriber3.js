 var mongo = require('mongodb');

 var server = new mongo.Server('localhost', 27017);
var db = new mongo.Db('pubsub', server);



db.open(function(err) {
   if (err) throw err;

    db.collection('messages', function(err, collection) {
             if (err) throw err;
            
                var cursor=collection.find({},{tailable:true, await_data:true, numberOfRetries:-1});
                cursor.stream()

  .on('data', function(doc){
    console.log("data for messages");
    console.log(doc.messages);
  })
  .on('error', function(err){
    // handle error
  })
  .on('end', function(){
    // final callback
  });
  }); 

   

    db.collection('logs', function(err, collection) {
             if (err) throw err;
            
                var cursor=collection.find({},{tailable:true, await_data:true, numberOfRetries:-1});
                cursor.stream()
  .on('data', function(data){
    console.log("data for logs");
    console.log(data.foo);
  })
  .on('error', function(err){
    // handle error
  })
  .on('end', function(){
    // final callback
  });
  }); 
 });
