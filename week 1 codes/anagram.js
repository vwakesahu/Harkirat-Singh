function isAnagram(str1, str2) {
  if (sorting(str1) == sorting(str2)) return true;
  else return false;
}

function sorting(str) {
  var string = str.split("");
  string.sort();
  string = string.join();
  console.log(string);
  return string;
}

var ans = isAnagram("aaahhhww", "wwaasahhh");
console.log(ans);


// .sort only works on array not strings
// ["b", "c"] can be sorted using .sort but "bc" cant