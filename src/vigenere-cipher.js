const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(meme) {
    this.meme = meme;
  }
  vigenerSquare() {
    const words = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    const square = [];
    for (var i = 0; i < words.length; i++) {
      square[i] = words.slice(i).concat(words.slice(0, i));
    }
    return square;
  }
  encrypt(string, key) {
    if (string && key) {
      const square = this.vigenerSquare();
      const words = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
      let newString = string.toUpperCase();
      let newKey = key.split('')
      let i = newKey.length;
      for (i = i; i < string.length; i += i) {
        key = key.concat(key);
      }
      newKey = key.toUpperCase().split('').slice(0, string.length)
      let str = "";
      let j = 0
      for (let i = 0; i < newString.length; i++) {
        if (words.indexOf(newString[i]) !== -1) {
          str += square[words.indexOf(newString[i])][words.indexOf(newKey[j])];
          j++
        } else str += newString[i];
      }
      if (this.meme !== false) {
        return str;
      } else return str.split('').reverse().join('');
    } else throw Error('Error')
  }

  decrypt(string, key) {
    if (string && key) {
      const square = this.vigenerSquare();
      const words = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
      let newString = string.toUpperCase();
      let newKey = key.split('');
      let i = newKey.length;
      for (i = i; i < string.length; i += i) {
        key = key.concat(key);
      }
      newKey = key.toUpperCase().split('').slice(0, string.length)
      let str = "";
      let j = 0
      for (let i = 0; i < newString.length; i++) {
        if (words.indexOf(newString[i]) !== -1) {
          let row = words.indexOf(newKey[j])
          let coll = square[row].indexOf(newString[i]);
          str += words[coll];
          j++
        } else str += newString[i];
      }
      if (this.meme !== false) {
        return str;
      } else return str.split('').reverse().join('');
    } else throw Error('Error')
  }
}
module.exports = VigenereCipheringMachine;