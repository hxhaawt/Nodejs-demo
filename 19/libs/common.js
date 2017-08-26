function toDou (n) {
    return n<10 ? '0'+n : ''+ n;
}

function time2Date ( timestamp) {
    // 将后台的 秒数转换为需要的时间格式
    var oDate =  new Date();
    oDate.setTime(timestamp * 1000);

    return oDate.getFullYear()+'-'+toDou(oDate.getMonth()+1)+'-'+toDou(oDate.getDate())+' '+toDou(oDate.getHours())+":"+toDou(oDate.getMinutes())+':'+toDou(oDate.getSeconds());
}

module.exports = {
    time2Date
}






