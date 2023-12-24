//1*2*3
function factorial(n) {
  var mul = 1;
  for (let index = 1; index <= n; index++) {
    mul *= index;
  }
  return mul;
}

const ans = factorial(100);
console.log(ans);
