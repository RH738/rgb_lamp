var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var favicon = require('serve-favicon');
var schedule = require('node-schedule');


app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(express.static('public'))
app.use(express.static('bower_components'))
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

var scheduleList = [];

app.post('/sendDate', function(req, res) {
    var s1 = req.body.startDateTime.split(' ');
    var s2 = req.body.endDateTime.split(' ');
    scheduleList.push({
        color: req.body.color,
        startDate: s1[0],
        startTime: s1[1],
        endDate: s2[0],
        endTime: s2[1]
    });

    var date = new Date(
        s1[0].split('/')[2],
        s1[0].split('/')[1] - 1,
        s1[0].split('/')[0],
        s1[1].split(':')[1],
        s1[1].split(':')[2],
        0);
    var j = schedule.scheduleJob(date, function() {
        console.log('The world is going to end today.');
        console.log(date);
    });

    res.sendFile(__dirname + "/" + "index.html");
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});

app.get('/:Entries', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(scheduleList));
})





app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
});
