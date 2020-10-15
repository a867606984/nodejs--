const fs = require("fs");

//异步写入
fs.writeFile("./001index.txt","hello man","utf8",err=>{
    if(err) throw err;
})

//同步写入
fs.writeFileSync("./002index.txt","同步写入","utf8");


//文件流写入
const ws = fs.createWriteStream("./003index.txt","utf8");

ws.write("文件流写入");
ws.end();
