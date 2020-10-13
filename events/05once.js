//只调用一次的事件监听器
const EventEmitter = require("events");

class Application extends EventEmitter{}

const app = new Application();

//监听hello
app.once("hello",data=>{
    process.nextTick(()=>{

        console.log("nextTick: "+data);
    })
})


//触发hello事件
app.emit("hello","hello modules");
app.emit("hello","hello modules");
