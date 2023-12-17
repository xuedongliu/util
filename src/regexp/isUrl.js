/**
 *
 * @desc   判断是否为URL地址
 * @param  {String} str
 * @return {Boolean}
 */
function isUrl(str) {
    return /^(https?|ftp):\/\/[^\s\/$.?#].\S*$/.test(str);
}

module.exports = isUrl;
