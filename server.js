var express = require('express'); //require is a node method not the webAPI/browserAPI. I have a node package and I want to import it into the file.
var app = express(); //invoke that
var port = process.env.PORT || 3000; //process.env is the endpoint

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html'); //similar to page.js stuff
  // res.send('I sent something') //a way for you to send a string or a blob back to the browser
}) //this is an express method get. //when you throw console log in server.js it will show in terminal not the browser.

//use page.js to create single page app. If doing SPA this is as far as you need to go with server.js
app.listen(port, function() {
  console.log('Listening on port: ', port); //commas concatinates in console logs
})
