function sum(startNumber, endNumber) {
  var sum = 0;
  for (let i = startNumber; i < endNumber; i++) {
    sum += i;
  }
  return sum;
}

function printTiming() {
  console.log("10 seconds have completed");
}

setTimeout(printTiming, 10 * 1000);
    
console.log(sum(1, 10)); // yeh run hojayega then after 10 secs printTiming going to called
