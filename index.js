var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(express.static('public'))
app.use(express.static('bower_components'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/', function(req, res) {
    console.log(req.body)
    res.sendFile(__dirname + "/" +"index.html");
});

app.get('/', function(req, res){
    res.sendFile(__dirname + "/" +"index.html");
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
