//使用操作系统底层的 DNS 服务进行域名解析时，不需要连接到网络仅使用系统自带 DNS 解析功能。这个功能由 dns.lookup()方法实现。
const dns = require('dns');

dns.lookup('www.baidu.com',(err,address,family)=>{
    console.log(`address: ${address}`);
    console.log(`family: ${family}`);
})

dns.lookup('www.baidu.com',{family:6},(err,address,family)=>{
    console.log(`address: ${address}`);
    console.log(`family: ${family}`);
})