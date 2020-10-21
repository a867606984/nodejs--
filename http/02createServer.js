const http = require("http");

const app = http.createServer((req,res)=>{
    
    res.writeHead(200,{'Content-Type':'image/jpg'});

    //流传输一张图片
    // const r = require('fs').createReadStream("./1.jpg");
    // r.pipe(res);


    //传输一张图片
    const img = require('fs').readFileSync('./1.jpg');
    res.end(img);
})

app.listen(9000,()=>{
    console.log("server run successful")
});





