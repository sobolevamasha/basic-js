const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date) {
    return 'Unable to determine the time of year!';
  } else if (!(date instanceof Date)){
    throw 'Not a date!';
  } else if (date.getTime() === NaN){
    throw 'Not a date!';
  } else {
    
    let month = date.getMonth();
    let season;
    if (month === 11 || month === 0 || month === 1){
      season = 'winter';
    } else if (month >= 2 && month <= 4){
      season = 'spring';
    } else if (month >= 5 && month <= 7){
      season = 'summer';
    } else if (month >=8 && month <= 10){
      season = /autumn|fall/;
    }
    return season;
}
};
