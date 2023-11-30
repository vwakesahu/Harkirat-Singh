/*
 *****
 *   *
 *   *
 *   *
 *****
 */

function printHollowSquare(n) {
  var pattern = "";
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (j < n - 1 && j > 0) {
        if (i == 0 || i == n - 1) {
          pattern += "*";
        } else {
          pattern += " ";
        }
      } else {
        pattern += "*";
      }
    }
    pattern += "\n";
  }
  return pattern;
}

const pattern = printHollowSquare(10000);
console.log(pattern);
