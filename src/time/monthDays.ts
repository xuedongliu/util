/**
 * @desc 获取指定日期月份的总天数
 * @param {Date} [time]
 * @return {Number}
*/
function monthDays(time){
    const $time = time ? new Date(time) : new Date();
    const year = $time.getFullYear();
    const month = $time.getMonth() + 1;
    return new Date(year, month, 0).getDate();
}
module.exports = monthDays;
