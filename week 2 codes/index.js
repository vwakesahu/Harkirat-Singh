const express = require("express");
const app = express();
const port = 3000;

function calSum(n) {
  var sum = 0;
  for (let index = 0; index < n; index++) {
    sum += index;
  }
  return sum;
}

function handleDontKnowRequest(req, res) {
  var n = req.query.n;
  const calculatedSum = calSum(n);
  console.log(calculatedSum);
  res.send(`Answer ${calculatedSum}`);
}
function handleFirstRequest(req, res) {
  res.send("Hello World");
}

app.get("/", handleFirstRequest);
app.get("/dontknow", handleDontKnowRequest);

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
