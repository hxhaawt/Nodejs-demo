const crypto=require('crypto');

// 用MD5进行加密或者说文件签名
var obj=crypto.createHash('md5');
// 选择加密的数字
obj.update('123456');
// 选择16进制数字输出
var str=obj.digest('hex');

console.log(str);





