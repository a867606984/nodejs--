//文件压缩
const fs = require('fs');
const zlib = require('zlib');

const gunzip = zlib.createGunzip();

const inp = fs.createReadStream('./un-zlib.txt.gz');

const out = fs.createWriteStream('un-zlib.txt')

inp.pipe(gunzip).pipe(out);













// const zlib = require('zlib')
// const fs = require('fs')
// const gunzip = zlib.createGunzip()
// const inp = fs.createReadStream('./un-zlib.txt.gz')
// const out = fs.createWriteStream('un-zlib.txt')
// inp.pipe(gunzip).pipe(out)
