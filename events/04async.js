//使用setImmediate和process异步调用所有监听器
const EventEmitter = require("events");

class Application extends EventEmitter{}

const app = new Application();

//监听hello
app.on("hello",data=>{
    process.nextTick(()=>{

        console.log("nextTick: "+data);
    })
})

//监听hello
app.on("hello",data=>{
    setImmediate(()=>{

        console.log("setImmediate: "+data);
    })
})


//触发hello事件
app.emit("hello","hello modules");

console.log("hello world");