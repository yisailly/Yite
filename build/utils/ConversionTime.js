/**
 * 时间转换(秒-天时分秒)
 * @param {*} oldsecond 
 * @returns 
 */
export default function ConversionTime(oldsecond) {
    var day = Math.floor(oldsecond / 86400);
    var hours = Math.floor((oldsecond % 86400) / 3600);
    var minutes = Math.floor(((oldsecond % 86400) % 3600) / 60);
    var newsecond = Math.floor(((oldsecond % 86400) % 3600) % 60);
    return day + "天" + hours + "小时" + minutes + "分钟" + newsecond + "秒";
}