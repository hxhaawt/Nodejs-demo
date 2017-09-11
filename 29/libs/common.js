const crypto=require('crypto');

module.exports = {
    MD5_SUFFIX: "ASDFEAD231234*&*^&%vdv23424980FJDiej非常不错fdFJIFJ*&(^$(@)cds",
    md5: function(str) {

        // 用MD5进行加密或者说文件签名
        var obj=crypto.createHash('md5');

        // 选择加密的字符串
        obj.update( str );

        // 选择16进制数字输出
        return obj.digest('hex');
    }
};

