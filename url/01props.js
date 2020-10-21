//URL的一些属性

const {URL} = require('url');

const myUrl = new URL("https://github.com/webfansplz#hello");

console.log(myUrl);

// {
//     href: 'https://github.com/webfansplz#hello',  // 序列化的 URL
//     origin: 'https://github.com', // 序列化的 URL 的 origin
//     protocol: 'https:', // URL 的协议
//     username: '', // URL 的用户名
//     password: '', //  URL 的密码
//     host: 'github.com', // URL 的主机
//     hostname: 'github.com',   // URL 的主机名
//     port: '',  // URL 的端口
//     pathname: '/webfansplz',  // URL 的路径
//     search: '', // URL 的序列化查询参数
//     searchParams: URLSearchParams {}, //  URL 查询参数的 URLSearchParams 对象
//     hash: '#hello'  // URL 的片段
//   }
  
