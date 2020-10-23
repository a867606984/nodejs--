const http = require('http');

const server = http.createServer((req,res)=>{

    let body = '';

    req.setEncoding('utf8');

    req.on('data',chunk=>{
        body += chunk;
    })

    req.on('end',()=>{
        try {
            let data = JSON.parse(body);
            res.write(typeof data);
            res.end();
        } catch (err) {
            res.statusCode = 400;
            res.end(`错误：${err.message}`);
        }
    })
})

server.listen(9000,()=>{
    console.log('server run successful')
});


