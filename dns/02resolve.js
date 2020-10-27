//dns.resolve(hostname[, rrtype], callback)：将一个域名（如 'www.baidu.com'）解析为一个 rrtype 指定类型的数组
const dns = require('dns');

dns.resolve('www.baidu.com',"A",(err,addresses)=>{
    console.log(addresses);
})

dns.resolve('www.baidu.com',"AAAA",(err,addresses)=>{
    console.log(addresses);
})

// rrtype
// records 包含
// 结果的类型
// 快捷方法




// 'A'
// IPv4 地址 (默认)
// string
// dns.resolve4()


// 'AAAA'
// IPv6 地址
// string
// dns.resolve6()


// 'ANY'
// 任何记录
// Object
// dns.resolveAny()


// 'CNAME'
// 规范名称记录
// string
// dns.resolveCname()


// 'MX'
// 邮件交换记录
// Object
// dns.resolveMx()


// 'NAPTR'
// 名称权限指针记录
// Object
// dns.resolveNaptr()


// 'NS'
// 名称服务器记录
// string
// dns.resolveNs()


// 'PTR'
// 指针记录
// string
// dns.resolvePtr()


// 'SOA'
// 开始授权记录
// Object
// dns.resolveSoa()


// 'SRV'
// 服务记录
// Object
// dns.resolveSrv()


// 'TXT'
// 文本记录
// string[]
// dns.resolveTxt()

