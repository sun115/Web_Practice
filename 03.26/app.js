//서버 만들 때 쓰는 코드
var express = require('express');
var http = require('http');
var app = express();
//80번 포트에 app 이라는 서버를 만들겠다.
var server = http.createServer(app).listen(80);


// localhost 연결 방법
// cmd - cd (실행하려는 app.js가 있는 폴더) - supervisor app.js
// chrome - http://localhost/어쩌구저쩌구


//localhost 의 blank request를 받으면 MAIN PAGE라고 response하겠다.
app.get('/', function (req, res) {
  res.send("MAIN PAGE");
});

//test라는 request를 받으면 TURN BACK 이라고 response하겠다.
app.get('/javascript', function (req, res) {
  res.sendfile("js.html");
});

app.get('/javascript2', function (req, res) {
  res.sendfile("js2.html");
});

//file이라는 request를 받으면 hello.html라는 file을 보내겠다.
app.get('/javascript3', function (req, res) {
  res.sendfile("js3.html");
});

//image라는 request를 받으면 image폴더의 laughing.gif라는 파일을 보내겠다.
app.get('/javascript4', function (req, res) {
  res.sendfile("js4.html");
});

app.get('/javascript5', function (req, res) {
  res.sendfile("js5.html");
});

app.get('/javascript6', function (req, res) {
  res.sendfile("js6.html");
});


console.log("running");
