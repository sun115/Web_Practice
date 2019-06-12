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



app.get('/newsWriteForm', function(req, res) {
  res.sendfile("newsWrite.html")
});

app.post('/writeNews', function(req, res){
  var insertQ = `insert into news (writer, title, article)
  values ("${req.body.writer}", "${req.body.title}", "${req.body.text}")`;

  connection.query(insertQ,function(err, rows, fields){
    res.send(rows);
  });
});
















app.get('/', function(req, res) {
});

app.get('/form', function(req, res) {
  res.sendfile("html.html");
});

app.get('/newList', function(req, res) {
  res.sendfile("newList.html");
});

app.get('/upload', function(req, res) {
  res.sendfile("upLoad.html");
});

app.get('/newsDeleteForm', function(req, res) {
  res.sendfile("newsDelete.html");
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

app.get('/getNewsList', function(req, res) {
  var selectQuery = 'select * from news';
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
