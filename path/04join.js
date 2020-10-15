//拼接路径片段
const path = require('path');

let result = path.join("/path","example","./03isAbsolute.js");

console.log(result)

//路径变量
console.log("__dirname",__dirname);//文件夹
console.log("__filename",__filename);//文件名


let result2 = path.join(__dirname,"views","views.html");

console.log(result2);

