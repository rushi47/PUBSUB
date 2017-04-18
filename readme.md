As given in problem statement, db is monitored continuesly by using mongoDB's tailable cursor.
For using the tailable cursor we have to make collection Tailable and it is achieved by using
mongoDB's Capped Collection.
There are 4 files in which first one is Publish.js which i am using to add data in DB.
Its using two collections message and log, and data is added periodically.
The others are subsriber in which subscriber.js have subscribed to message and Subscriber2 
have subscribed to logs. The last one subscriber3 have subscribered to both logs and messages.

Steps to follow - 
1. To run the app first make capped collection in mongodb explicitaly -
	db.createCollection( "collection name", { capped: true, size: 100000 } );

Now go to folder- example 	

2. npm init // to creat package.json file which will help to track the dependencies.	  

3. npm install mongoose --save // to install mongoose which we will use as wrapper for DB.

4. node publish.js // run publisher and it will start adding to db

In another terminal run

5. node subscriber.js // choose any subscriber you want to run  .

Subscriber terminal will start showing the data which will be added by Publish.js 

For making it more real time we can use socket and add it in Cursor to display data in DOM and make 
app more interactive.