//文件夹状态- 文件/文件夹

const fs = require("fs");

fs.stat("./00index.txt",(err,stats)=>{
    if(err) throw err;

    // console.log(stats);
})

fs.stat("./00test4",(err,stats)=>{
    if(err) throw err;

    // console.log(stats);
})

let result = fs.statSync("00test");
// console.log(result);

//是否是文件类型
console.log(result.isFile());

//是否是文件夹类型
console.log(result.isDirectory());









