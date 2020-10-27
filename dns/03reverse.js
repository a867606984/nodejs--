//dns.reverse解析为域名
const dns = require('dns');



dns.reverse('8.8.8.8',(err,domains)=>{
    console.log(domains);
})

// dns.reverse('8.8.8.8', (err, domains) => {
//     if (err) throw err
//     console.log(domains) // [ 'dns.google' ]
//   })
  


