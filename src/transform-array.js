const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
    throw new Error("Error");
    }

    let newArr = [];
    let flag = false;

    for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
        case "--discard-next":
        if (i !== arr.length - 1) {
            i++;
            flag = true;
        }
        break;
        case "--discard-prev":
        if (i !== 0 && !flag) {
            newArr.pop();
        }
        break;
        case "--double-next":
        if (i !== arr.length - 1) {
            newArr.push(arr[i + 1]);
        }
        break;
        case "--double-prev":
        if (i !== 0 && !flag) {
            newArr.push(arr[i - 1]);
        }
        break;
        default:
        newArr.push(arr[i]);
        flag = false;
    }
}

    return newArr;
};