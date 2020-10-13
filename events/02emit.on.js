//多个事件监听器及 this 指向
const EventEmitter = require("events");

class Application extends EventEmitter{}

const app = new Application();

//监听hello事件
app.on("hello",function(data){
    console.log(this);
    console.log(data+"你在干嘛");
})

app.on("hello",data=>{
    console.log(this);
    console.log("我在T球")
})


//触发hello事件
app.emit("hello","小明");
