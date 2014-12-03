var my_modulesPath = "./my_modules/"

var express = require('express');
var app = express();
var logger = require(my_modulesPath + 'logger');

// defaults
var port = 3000;

// log everything!
app.use(logger);

// serve static files
app.use('/static', express.static(__dirname + '/public'));

// routes
app.get('/', function(req, res){
  res.send("Welcome!");
})

app.listen(port, function(){
  console.log("Listening on port " + port +"\n\n")
})
