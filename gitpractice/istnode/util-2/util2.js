const fs = require("fs");
let a = fs.readFileSync("util/util.js");
console.log(a.toString());