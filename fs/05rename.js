//重命名文件/文件夹

const fs = require("fs");

//异步重命名文件夹
fs.rename("./00test1","./00test3",function(err){
    if(err) throw err;
});


//同步重命名文件夹
fs.renameSync("./00test2","./00test4",);













