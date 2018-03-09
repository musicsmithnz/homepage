var http = require('http');
var fs = require("fs");
var path = require("path");
var cors = require('cors');
var express = require('express');
var app = express();
var port = 3000;

app.use(cors())

app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "https://ipfs.io");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      next();
});
app.use('/src', express.static(__dirname+'/src'))
app.use('/resources', express.static(__dirname+'/resources'))
app.use('/node_modules', express.static(__dirname+'/node_modules'))


app.get('/', cors(), function (req, res, next) {
    res.sendFile(path.join(__dirname,'index.html'))
})

app.listen(port, function () {
          console.log('CORS-enabled web server listening on port '+port)
})

