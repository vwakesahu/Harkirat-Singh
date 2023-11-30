let firstNo = 0,
  secondNo = 1;
console.log(firstNo);
console.log(secondNo);
for (let i = 0; i < 10; i++) {
  let temp = secondNo;
  secondNo = firstNo + secondNo;
  firstNo = temp;
  console.log(secondNo);
}