function formatDate(date, format) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const o = {
        "y+": date.getFullYear(), // 年份
        "M+": date.getMonth() + 1, // 月份
        "d+": date.getDate(), // 日
        "H+": date.getHours(), // 小时
        "m+": date.getMinutes(), // 分
        "s+": date.getSeconds(), // 秒
        "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
        "S+": date.getMilliseconds() // 毫秒
    };
    
    for (const k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            if (k === "y") {
                format = format.replace(RegExp.$1, ("0000" + o[k]).slice(-4));
            } else if (k === "M") {
                format = format.replace(RegExp.$1, months[o[k] - 1]);
            } else if (k === "MM") {
                format = format.replace(RegExp.$1, ("0" + o[k]).slice(-2));
            } else if (k === "MMM") {
                format = format.replace(RegExp.$1, shortMonths[o[k] - 1]);
            } else if (k === "MMMM") {
                format = format.replace(RegExp.$1, months[o[k] - 1]);
            } else if (k === "H" || k === "m" || k === "s" || k === "q" || k === "S") {
                format = format.replace(RegExp.$1, ("0" + o[k]).slice(-2));
            }
        }
    }
    
    return format;
}

module.exports = formatDate;
