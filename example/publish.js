
var mongoose=require("mongoose");

var messageSchema=mongoose.Schema({
    foo:"String"
});


var logSchema=mongoose.Schema({
    joo:"String"
});





mongoose.connect("localhost:27017/collection-name");
var message=mongoose.model("message", messageSchema);
var log=mongoose.model("log", logSchema);

setInterval(function(){

log.create({foo:"bar working - log", time:Date.now()}, function(err,data){
            if(err) throw err;
            console.log('published', data);
                         

    });

},2000);


setInterval(function(){

    message.create({joo:"joo working -mesages", time:Date.now()}, function(err, data){
            if(err) throw err;
            console.log('published', data);
                           
    });
},2000);
