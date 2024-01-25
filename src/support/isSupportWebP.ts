/**
 *
 * @desc 判断浏览器是否支持webP格式图片
 * @return {Boolean}
 */
function isSupportWebP() {
    return (typeof window.WebPDecoder !== "undefined") || (
        document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0
    );
}

export default isSupportWebP;
