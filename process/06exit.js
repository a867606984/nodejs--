//process.exit()方法终止当前进程，此方法可接收一个退出状态的可选参数 code，不传入时，会返回表示成功的状态码 0。

process.on("exit",code=>{
    console.log(code);
})
process.exit(886)



