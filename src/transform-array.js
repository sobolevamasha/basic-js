const CustomError = require("../extensions/custom-error");

module.exports = function transform(array) {
    if (Array.isArray(array)) {
    let newArray = [].concat(array);

    let answer = newArray.map((item, index, array) => {
        if (typeof item === 'string') {
        if (item === '--double-next') {
            array[index + 1] !== undefined ? item = array[index + 1] : item = '';
        } else if (item === '--double-prev') {
            array[index - 1] !== undefined ? item = array[index - 1] : item = '';
        } else if (item === '--discard-next') {
            array[index + 1] !== undefined ? (item = '', array[index + 1] = '') : item = '';
        } else if (item === '--discard-prev') {
            array[index - 1] !== undefined ? (item = 'del-prev') : item = '';
        }
    } return item;
    });

    for (let i = 0; i < answer.length; i++) {
        let indexDel = answer.indexOf('del-prev') - 1;
        indexDel > 0 ? answer.splice(indexDel, 2) : answer;
    }

    return answer.filter((item) => item !== '');
}

throw Error("Error")

}