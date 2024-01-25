/**
 *
 * @desc   判断是否为URL地址
 * @param  {String} str
 * @return {Boolean}
 */
function isUrl(str: string): boolean {
  return /^(https?|ftp):\/\/[^\s\/$.?#].\S*$/.test(str);
}

export default isUrl;
export { isUrl };
