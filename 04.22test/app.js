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


//test라는 request를 받으면 TURN BACK 이라고 response하겠다.
app.get('/javascript', function (req, res) {
  res.sendfile("js01.html");
});

app.get('/javascript2', function (req, res) {
  res.sendfile("js02.html");
});

app.get('/midTermReview', function (req, res) {
  res.sendfile("midTermReview.html");
});

app.get('/javascript3', function (req, res) {
  res.sendfile("js03.html");
});

app.get('/js03', function (req, res) {
  var num1 = Number(req.query.num1);
  var num2 = Number(req.query.num2);
  var num3 = Number(req.query.num3);
  console.log(num1*num2*num3);
  res.send(`mul is ${num1*num2*num3}`);
});

app.get('/javascript4', function (req, res) {
  res.sendfile("js04.html");
});

app.get('/js04', function (req, res) {
  var inputT = Number(req.query.inputT);

  var result = "구입불가";
  var priceTable =
  [{name:"item1", price:1000},
  {name:"item2", price:5000},
  {name:"item3", price:50000},
  {name:"item4", price:30000},
  {name:"item5", price:10000},
  {name:"item6", price:100000},
  {name:"item7", price:500000}];
  var sortingField = 'price';
  priceTable.sort(function(a,b){
    return a[sortingField]-b[sortingField];
  });
  for (var i = 0; i < priceTable.length; i++) {
    if (inputT >= priceTable[i].price) {
      result = priceTable[i].name;
      console.log(priceTable[i]);
    }
  }
  res.send(`${result}`);
});

app.get('/javascript5', function (req, res) {
  res.sendfile("practice.html");
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


console.log("running");
