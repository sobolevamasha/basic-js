const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArr: [],

  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    this.chainArr = [ ...this.chainArr, `( ${value} )`];
    return this;
    }
  ,
  removeLink(position) {
    if ( !Number.isInteger(position)
        || this.chainArr[position - 1] === undefined
    ) {
      this.chainArr = [];
      throw new Error('Wrong position argument');
    } else {
      this.chainArr.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.chainArr.reverse();
    return this;
  },
  finishChain() {
    let chainStr = this.chainArr.join('~~');
    this.chainArr = [];
    return chainStr;
  }
};

module.exports = chainMaker;
