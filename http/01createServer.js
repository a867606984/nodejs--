const http = require("http");

const app = http.createServer((req,res)=>{
    console.log(req.url,req.method);
    switch(req.url){
        case '/home':
            res.end("hello home");
            break;
        case '/article':
            res.end('hello article');
            break;
        default:
            res.end('not Found any pages');
            break;

    }
    // res.end("hello world");
})

app.listen(9000,()=>{
    console.log("server run successful")
});





