const express = require("express");
const app = express();
const port = 3000;

function calSum(startIndex, lastIndex) {
  var sum = 0;
  for (let index = startIndex; index <= lastIndex; index++) {
    sum += index;
  }
  return sum;
}

function handleDontKnowRequest(req, res) {
  //passing variable using query
  var lastIndex = parseInt(req.query.n2);
  var startIndex = parseInt(req.query.n1);
  const calculatedSum = calSum(startIndex, lastIndex);
  console.log(calculatedSum);
  res.send(`Answer ${calculatedSum}`);
}
function handleFirstRequest(req, res) {
  res.send("Hello World");
}


//Browsers URL bar sends only get request http://localhost:3000/dontknow
app.get("/", handleFirstRequest);
app.get("/dontknow", handleDontKnowRequest);

//POST request can be sent by using postman client: http://localhost:3000/postRequest
app.post("/postRequest", handleFirstRequest);

function started() {
  console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);

//fs is the external library
// const fs = require("fs");
// const express = require("express")

// function callbackFn(err, data) {
//   console.log(data);
// }
// fs.readFile("a.txt", "utf-8", callbackFn);
