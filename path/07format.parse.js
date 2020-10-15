const path = require("path");

//解析路径
let result = path.parse("../events/03sync.js");

console.log(result);

//序列化路径
let result2 = path.format({
    root:"",
    dir:"../events",
    base:"04async.js",
    ext:".js",
    name:"04async"
})
console.log(result2)