//同步调用所有监听器
const EventEmitter = require("events");

class Application extends EventEmitter{}

const app = new Application();

//监听hello
app.on("hello",data=>{
    console.log(data);
})

//触发hello事件
app.emit("hello","hello modules");

console.log("hello world");