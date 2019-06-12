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

var connection1 = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'webUI'
});

var connection2 = mysql.createConnection({
  host: '192.168.110.3',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'webUI'
});

setInterval(function() {
  request.get('https://polling.finance.naver.com/api/realtime.nhn?query=SERVICE_ITEM:006400|SERVICE_RECENT_ITEM:006400,270210', function(err, response, body) {
    body = JSON.parse(body);
    var price = (body.result.areas[1].datas[0].nv + "");

    var insertQ = `insert into time (quote) values ("${price}")`;
    connection2.query(insertQ, function(err, rows, fields) {
      if (err) throw err;
    })
  })
}, 100000);

app.get('/chart', function(req, res) {
  res.sendfile("chart.html");
});



console.log("running");
