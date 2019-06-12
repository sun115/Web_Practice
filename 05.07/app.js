var express = require('express');
var http = require('http');
// vars cors = ('CORS');
var app = express();
//80번 포트에 app 이라는 서버를 만들겠다.
var server = http.createServer(app).listen(80);

//localhost 의 blank request를 받으면 MAIN PAGE라고 response하겠다.
app.get('/', function (req, res) {
  res.send("MAIN PAGE");
});


// localhost 연결 방법
// cmd - cd (실행하려는 app.js가 있는 폴더) - supervisor app.js
// chrome - http://localhost/어쩌구저쩌구

app.get('/javascript1', function (req, res) {
  res.sendfile("selectBox01.html");
});

app.get('/getCarPrice', function(req, res){
  var myChoice1 = Number(req.query.myChoice1);
  var myChoice2 = Number(req.query.myChoice2);

  var typePrice = [2100,1500,1300,3500,3200];
  var colorPrice = [100,120,200,130,80];

  // var result = "";
  // result = typePrice[myChoice1] + colorPrice[myChoice2] + "";
  res.send(typePrice[myChoice1] + colorPrice[myChoice2] + "만원")
});

app.get('/javascript2', function (req, res) {
  res.sendfile("selectBox02.html");
});

app.get('/javascript3', function (req, res) {
  res.sendfile("quiz01.html");
});


console.log("running");
