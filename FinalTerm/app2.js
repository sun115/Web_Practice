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

// var connection1 = mysql.createConnection({
//   host: 'localhost',
//   port: 3306,
//   user: 'root',
//   password: 'root',
//   database: 'final'
// });

// app.get('/getPrice', function(req, res) {
//   // var tableName = req.query.tableName;
//   var myurl = req.query.myurl
//   // setInterval(function() {
//     request.get(myurl, function(err, response, body) {
//       body = JSON.parse(body);
//       var price = (body.result.areas[0].datas[0].nv + "");
//       res.send(price);
//     })
//   // }, 1000)
// });


app.get('/ajax', function(req, res) {
  res.sendfile("ajax.html");
});

app.get('/getPrice', function(req, res) {
  var myurl = req.query.myurl;
  console.log(myurl);
  request.get(myurl, function(err, response, body) {
    body = JSON.parse(body);
    var price = (body.result.areas[0].datas[0].nv + "");
    res.send(price);
  })
});

//------------------------------------------------------------------------------------------------------------------------
//
// app.get('/bicycleReq', function(req, res) {
//   request.get('https://polling.finance.naver.com/api/realtime.nhn?query=SERVICE_ITEM:024950', function(err, response, body) {
//     body = JSON.parse(body);
//     res.send(body.result.areas[0].datas[0].nv + "");
//   })
// });
//
//
// app.post('/bicycleWrite', function(req, res) {
//   var insertQ = `insert into bicycle (price)
//   values ("${req.body.price}")`;
//   console.log(insertQ);
//   connection.query(insertQ, function(err, rows, fields) {
//     res.send(rows);
//   })
// });
//
// //------------------------------------------------------------------------------------------------------------------------
//
// app.get('/zoomReq', function(req, res) {
//   request.get('https://polling.finance.naver.com/api/realtime.nhn?query=SERVICE_ITEM:239340', function(err, response, body) {
//     body = JSON.parse(body);
//     res.send(body.result.areas[0].datas[0].nv + "");
//   })
// });
//
//
// app.post('/zoomWrite', function(req, res) {
//   var insertQ = `insert into zoom (price)
//   values ("${req.body.price}")`;
//   console.log(insertQ);
//   connection.query(insertQ, function(err, rows, fields) {
//     res.send(rows);
//   })
// });
//
// //------------------------------------------------------------------------------------------------------------------------
//
// app.get('/knnReq', function(req, res) {
//   request.get('https://polling.finance.naver.com/api/realtime.nhn?query=SERVICE_ITEM:058400', function(err, response, body) {
//     body = JSON.parse(body);
//     res.send(body.result.areas[0].datas[0].nv + "");
//   })
// });
//
//
// app.post('/knnWrite', function(req, res) {
//   var insertQ = `insert into knn (price)
//   values ("${req.body.price}")`;
//   console.log(insertQ);
//   connection.query(insertQ, function(err, rows, fields) {
//     res.send(rows);
//   })
// });
//
// //------------------------------------------------------------------------------------------------------------------------
//
// app.get('/icraftReq', function(req, res) {
//   request.get('https://polling.finance.naver.com/api/realtime.nhn?query=SERVICE_ITEM:052460', function(err, response, body) {
//     body = JSON.parse(body);
//     res.send(body.result.areas[0].datas[0].nv + "");
//   })
// });
//
//
// app.post('/icraftWrite', function(req, res) {
//   var insertQ = `insert into icraft (price)
//   values ("${req.body.price}")`;
//   console.log(insertQ);
//   connection.query(insertQ, function(err, rows, fields) {
//     res.send(rows);
//   })
// });
//
// //------------------------------------------------------------------------------------------------------------------------
//
// app.get('/balanceReq', function(req, res) {
//   request.get('https://polling.finance.naver.com/api/realtime.nhn?query=SERVICE_ITEM:303030', function(err, response, body) {
//     body = JSON.parse(body);
//     res.send(body.result.areas[0].datas[0].nv + "");
//   })
// });
//
//
// app.post('/balanceWrite', function(req, res) {
//   var insertQ = `insert into balance (price)
//   values ("${req.body.price}")`;
//   console.log(insertQ);
//   connection.query(insertQ, function(err, rows, fields) {
//     res.send(rows);
//   })
// });


console.log("running");
