//当字符串数据被存储入 Buffer 实例或从 Buffer 实例中被提取时，可以指定一个字符编码。
// 缓冲区转换为 UTF-8 格式的字符串

let result = Buffer.from('hello world');

console.log(result.toString());

/// 缓冲区数据转换为base64格式字符串
console.log(result.toString('base64'));



// 将base64编码的字符串，转换为UTF-8编码
let base64Str = result.toString('base64');

let buf = Buffer.from(base64Str,'base64');


let result2 = buf.toString('utf-8');
console.log(result2)



// const buffer = Buffer.from('Hello world')

// const base64Str = buffer.toString('base64')

// const buf = Buffer.from(base64Str, 'base64')

// console.log(buf.toString('utf8')) // Hello world


