//创建缓冲区
// console.log(Buffer);

console.log(Buffer.from([1,2,3,4,5]));

console.log(Buffer.from(new ArrayBuffer(8)));

console.log(Buffer.from('hello world'));



// console.log(Buffer.from([1, 2, 3, 4, 5])) // <Buffer 01 02 03 04 05>

// console.log(Buffer.from(new ArrayBuffer(8))) // <Buffer 00 00 00 00 00 00 00 00>

// console.log(Buffer.from('Hello world')) // <Buffer 48 65 6c 6c 6f 20 77 6f 72 6c 64>
