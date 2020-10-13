//removeListener  or  off 移除事件事件触发

const EventEmitter = require("events");

class Application extends EventEmitter{}

const app = new Application();


function play(){
        process.nextTick(()=>{
    
            console.log("hello nodejs");
        })
}

//监听hello
app.on("hello",play)


//触发hello事件
app.emit("hello");

//移除hello事件
// app.off("hello",play);
app.removeListener("hello",play);

app.emit("hello");
