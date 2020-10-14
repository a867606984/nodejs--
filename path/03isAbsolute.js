//是否是绝对路径
const path = require('path');

let isAbsolute1 = path.isAbsolute("../events/01emit.on.js")
let isAbsolute2 = path.isAbsolute("https://juejin.im/post/6844904029219192839#heading-13")
let isAbsolute3 = path.isAbsolute("01dirname.js")

console.log(isAbsolute1);
console.log(isAbsolute2);
console.log(isAbsolute3);
