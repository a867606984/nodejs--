//process.stdin 是一个指向标准输入流的可读流 Readable Stream。
process.stdin.setEncoding("utf8");

process.stdin.on("readable",()=>{
    let chunk;

    while((chunk = process.stdin.read())!==null){
        if(chunk === "\n"){
            process.stdin.emit("end");
            return
        }
        process.stdout.write(`收到的数据：${chunk}`);
    }
})

process.stdin.on("end",()=>{
    console.log("结束监听")
})



