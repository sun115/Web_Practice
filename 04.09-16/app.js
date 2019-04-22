var express = require('express');
var http = require('http');
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


//test라는 request를 받으면 TURN BACK 이라고 response하겠다.
app.get('/javascript', function (req, res) {
  res.sendfile("js01.html");
});

app.get('/javascript2', function (req, res) {
  res.sendfile("js02.html");
});

app.get('/javascript3', function (req, res) {
  res.sendfile("js03.html");
});

app.get('/javascript4', function (req, res) {
  res.sendfile("js04.html");
});

app.get('/javascript5', function (req, res) {
  res.sendfile("js05.html");
});

console.log("running");
