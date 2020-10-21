//URL序列化

const {URL} = require('url');

const myUrl = new URL("https://github.com/webfansplz#hello");

console.log(myUrl.href);

console.log(myUrl.toString());
console.log(myUrl.toJSON());
