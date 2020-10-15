//删除文件/文件夹

const fs = require("fs");

//异步删除文件
// fs.unlink("./001index.txt",err=>{
//     if(err) throw err;
// })

//同步删除文件
// fs.unlinkSync("./002index.txt");


//异步删除目录
// fs.rmdir("./00test",err=>{
//     if(err) throw err;
// })

//同步删除目录
// fs.rmdirSync("./00test");