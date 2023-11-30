const fs = require("fs");

function fileIsRead(err, content) {
  console.log(content);
}

fs.readFile("setTimeout.js", "utf-8", fileIsRead);

// fs.read("./setTimeout.js").then(fileIsRead);
