//dns.lookupService解析为域名和服务
const dns = require('dns');

dns.lookupService('127.0.0.1','80',(err,hosname,service)=>{
    console.log(`主机名: ${hosname} \n 服务类型：${service}`)
})


// dns.lookupService('127.0.0.1', 80, function(err, hostname, service) {
//     if (err) throw err
//     console.log('主机名：%s，服务类型：%s', hostname, service) // 主机名：localhost，服务类型：http
//   })
  


