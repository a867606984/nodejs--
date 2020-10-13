//. 事件触发顺序
//在注册事件前,触发该事件,不会被触发 !!

const EventEmitter = require("events");

class Application extends EventEmitter{}

const app = new Application();

//触发hello事件
app.emit("hello","hello modules");

//监听hello
app.on("hello",data=>{
    process.nextTick(()=>{

        console.log("nextTick: "+data);
    })
})



