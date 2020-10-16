//创建文件夹

const fs = require("fs");

//异步创建文件夹
fs.mkdir("./00test1",function(err){
    if(err) throw err;
});


//同步创建文件夹
fs.mkdirSync("./00test2");






