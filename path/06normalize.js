//规范化路径
const path = require("path");

let result1 = path.normalize('/path///example/index.js');
let result2 = path.normalize('//path///example///index.js');
let result3 = path.normalize('//path\//example\/index.js');
let result4 = path.normalize('C:////temp\\\\/\\/\\/foo/bar');


console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
