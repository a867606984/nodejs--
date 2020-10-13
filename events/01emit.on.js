//基础例子  
const EventEmitter = require("events");

class Application extends EventEmitter{}

const app = new Application();

//监听hello事件
app.on("hello",(data)=>{
    console.log(data+"你在干嘛");
})

//触发hello事件
app.emit("hello","小明");
