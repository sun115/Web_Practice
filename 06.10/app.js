var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(80);
var mysql = require('mysql');
var request = require('request');

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


app.get('/ajax', function(req, res) {
  res.sendfile("ajax.html");
});


app.get('/requestTest', function(req, res) {
  request.get('https://www.naver.com', function(err, response, body) {
    res.send(body);
  })
});

app.get('/requestTest2', function(req, res) {
  request.get('https://polling.finance.naver.com/api/realtime.nhn?query=SERVICE_ITEM:006400|SERVICE_RECENT_ITEM:006400,270210', function(err, response, body) {
      body = JSON.parse(body);
      res.send(body.result.areas[1].datas[0].nv + "");
    }
  )
});


app.post('/writeQuotes', function(req, res) {
  var insertQ = `insert into time (quote)
  values ("${req.body.quote}")`;
  console.log(insertQ);
  connection.query(insertQ, function(err, rows, fields) {
    res.send(rows);
  })
});

app.get('/clearAll', function(req, res) {
  var deleteQ = 'TRUNCATE TABLE time';
  console.log(deleteQ);
  connection.query(deleteQ,function(err, rows, fields) {
      res.send(rows);
    })
});

app.get('/getQuotes', function(req, res) {
  var selectQuery = 'select * from time';
  console.log(selectQuery);
  connection.query(selectQuery,function(err, rows, fields) {
      res.send(rows);
    });
});




console.log("running");
