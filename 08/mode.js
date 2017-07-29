// require  请求：引入模块
// module   批量输出变量
// exports  输出
// 第8讲有关于怎么发布自己 npm 模式的方法


const a = 11;

// 单个输出变量 
// exports.a = a;
// exports.b = a;

// 批量输出变量
module.exports = {
    a: a,
    b: a
};

