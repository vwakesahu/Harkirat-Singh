// "my name is Vivek Sahu" => ["my", "name", "is", "Vivek", "Sahu"]
// .sort works array only
var finalArrayString = [];

function stringToArray(sentence) {
  var array = sentence.split(" ");
  return array;
}

// function arrayToString(array) {
//   var sentence = "";
//   for (let i = 0; i < array.length; i++) {
//     if (i != array.length) sentence = sentence + array[i] + " ";
//     else sentence = sentence + array[i];
//   }
//   return sentence;
// }

function arrayToString(array) {
  var sentence = array.join(" ");
  return sentence;
}

const array = stringToArray("my name is Vivek Sahu");
console.log(array);

const sentence = arrayToString(array);
console.log(sentence);
