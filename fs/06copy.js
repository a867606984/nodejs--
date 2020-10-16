//复制文件/文件夹

const fs = require("fs");
const path = require("path");

//异步复制文件夹
fs.copyFile(path.join(__dirname,"./00test3"),path.join(__dirname,"./00test4"),function(err,copyFiles){
    if(err) throw err;
});


//同步复制文件夹
// fs.copyFileSync("./00test4","./00test41",);













