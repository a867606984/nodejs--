//将路径或路径片段的序列解析为绝对路径
const path = require("path");

let result1 = path.resolve("foo/bar","./baz");

let result2 = path.resolve("foo/bar","/baz");

let result3 = path.resolve("foo/bar","/tem/file")

let result4 = path.resolve(__dirname,"../");

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
