/**
 *
 * @param startTime
 * @param endTime
 * @returns {{hours: number, seconds: number, minutes: number, days: number, type: string}}
 */
function calculateTimeDiff(startTime: string | number | Date, endTime: string | number | Date) {
  const now = new Date(startTime);
  const end = new Date(endTime);

  // 计算两个日期之间的差值（以毫秒为单位）
  const diffInMs = Math.abs(end - now);

  // 将差值转换为天、小时、分钟和秒
  const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);

  // 判断是剩余时间还是超出时间
  if (now > end) {
    return { days, hours, minutes, seconds, type: "超时" };
  } else {
    return { days, hours, minutes, seconds, type: "剩余" };
  }
}

module.exports = calculateTimeDiff;
