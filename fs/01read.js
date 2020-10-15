const fs = require("fs");

//异步读取
fs.readFile("./00index.txt","utf8",(err,data)=>{
    console.log(err,data);
})

//同步读取
let txtFiles = fs.readFileSync("./00index.txt","utf8");

console.log(txtFiles);


//创建读取流
const stream = fs.createReadStream("./00index.txt","utf8");

// 这里可以看到fs.createReadStream用到了我们前面介绍的events eventEmitter.on() 方法来监听事件
stream.on("data",data=>{
    console.log("stream: " + data);
})