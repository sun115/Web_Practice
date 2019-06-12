var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);
var mysql = require('mysql');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json());

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'webUI'
});

app.get('/', function(req, res) {
  res.send("MAIN");
});

app.get('/interval', function(req, res) {
  res.sendfile("interval.html");
});


app.get('/mainAirplain', function(req, res) {
  res.sendfile("mainAirplain.html");
});


app.get('/flightForm', function(req, res) {
  res.sendfile("Flight.html")
});

app.get('/aircraftForm', function(req, res) {
  res.sendfile("Aircraft.html");
});




app.get('/getAirplainList', function(req, res) {
  var selectQ = `SELECT
                     A.flightName,
                     B.aircraftName,
                     B.seats,
                     A.departure,
                     A.arrival,
                     A.departTime,
                     A.arrivalTime
                  FROM
                  flight A
                  INNER JOIN aircraft B
                  ON A.aircraftCode = B.aircraftCode`;
  console.log(selectQ);
  connection.query(selectQ,function(err, rows, fields) {
      res.send(rows);
    });
});

app.get('/clearAll', function(req, res) {
  var selectQ1 = 'TRUNCATE TABLE flight';
  var selectQ2 = 'TRUNCATE TABLE aircraft';
  console.log(selectQ1,selectQ2);
  connection.query(selectQ1,function(err, rows, fields) {
    connection.query(selectQ2,function(err, rows, fields) {
      res.send(rows);
      })
    })
});



app.post('/writeFlights', function(req, res){
  var insertQ = `insert into flight (flightName, aircraftCode, departure, arrival, departTime, arrivalTime)
  values ("${req.body.flightName}", "${req.body.aircraftCode}", "${req.body.departure}", "${req.body.arrival}", "${req.body.departTime}", "${req.body.arrivalTime}")`;
  console.log(insertQ);
  connection.query(insertQ,function(err, rows, fields){
    res.send(rows);
  });
});

app.post('/writeAircrafts', function(req, res){
  var insertQ = `insert into aircraft (aircraftCode, aircraftName, seats)
  values ("${req.body.aircraftCode}", "${req.body.aircraftName}", "${req.body.seats}")`;
  console.log(insertQ);
  connection.query(insertQ,function(err, rows, fields){
    res.send(rows);
  });
});
















app.get('/', function(req, res) {
});




app.get('/upload', function(req, res) {
  res.sendfile("upLoad.html");
});




//localhost 의 blank request를 받으면 MAIN PAGE라고 response하겠다.




app.get('/update', function(req, res) {
  var txt1 = (req.query.txt1);
  var txt2 = (req.query.txt2);
  var selectQuery = `INSERT INTO news (title, article) VALUES ('${txt1}', '${txt2}')`;
  connection.query(selectQuery,function(err, rows, fields) {
      res.send(rows);
    });
});

app.get('/deleteAll', function(req, res) {
  var selectQuery = `DELETE FROM news`;
  connection.query(selectQuery,function(err, rows, fields) {
      res.send(rows);
    });
});


app.get('/getMyNews', function(req, res) {
  var selectQuery = 'select * from news';
  connection.query(selectQuery,function(err, rows, fields) {
      res.send(rows);
    });
});

app.get('/deleteOne', function(req, res) {
  var targetIndex = Number(req.query.targetIndex)
  var selectQuery = `DELETE FROM news WHERE no=${targetIndex}`;
  console.log(selectQuery);
  connection.query(selectQuery,function(err, rows, fields) {
      res.send(rows);
    });
});





app.get('/editPage', function(req, res) {
  no = Number(req.query.no)
  res.sendfile("newsEdit.html")
});

app.post('/editOne', function(req, res){
  var insertQ = `UPDATE news SET writer="${req.body.writer}", title="${req.body.title}", article="${req.body.text}" WHERE no=${req.body.targetIndex}`;
  connection.query(insertQ,function(err, rows, fields){
  res.send(rows);
  });
});




console.log("running");
