const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(Array.isArray(members)) {
    let arr = [];
    members.forEach((item) => {
      if(typeof item === 'string') {
        arr.push(item.trim().substring(0, 1).toUpperCase());
      }
    });
    if(arr.length === 0) return false;
    return arr.sort().join('');
  } else {
    return false
  }
};
