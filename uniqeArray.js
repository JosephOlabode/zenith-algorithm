const lodash = require('lodash');
const myArray = [1,2,3,2,5,7,7,3,9,3];

// this function uses a lodash package
function removeDuplicateOne(arr) {
    const uniqueArray = lodash.uniq(arr);
    return uniqueArray;
}

// this does not use any package
function removeDuplicateTwo(arr) {
    const uniqueArray = [];
    arr.forEach((e) => {
        if(contain(e, uniqueArray) === false) {
            uniqueArray.push(e)
        }
    })
    return uniqueArray;
}

function contain(a, array) {
    for(let i = 0; i < array.length; i++) {
        if(a === array[i]) {
            return true
        }
    }
    return false;
}
console.log(removeDuplicateOne(myArray));
console.log(removeDuplicateTwo(myArray));
