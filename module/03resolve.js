//使用 require.resolve()函数,可以获取 require 加载的模块的确切文件名,此操作只返回解析后的文件名，不会加载该模块。
console.log(require.resolve('./0100circle.js'));

