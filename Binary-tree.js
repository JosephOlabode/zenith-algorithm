const lodash = require('lodash');

function checkUnique(array) {
    const uniqueArray = lodash.uniq(array);
    return array.length === uniqueArray.length;
}
const tree = [
    [1, 2, 2],
    [1, 2, 1],
    [1, 3, 4],
    [1, 3, 1]
]
function checkForLongestUniqueNode(tree) {
    let uniqueNodes = [];
    let longestUniqueNode;
    for(let i= 0; i < tree.length; i++) {
        if(checkUnique(tree[i])){
            uniqueNodes.push(tree[i]);
        }
    }

    if(uniqueNodes.length === 0) {
        longestUniqueNode = []
    } else if(uniqueNodes.length > 1) {
        let maxIndex = 0
        for(let i = 0; i < uniqueNodes.length; i++) {
            if(uniqueNodes[i].length > uniqueNodes[i++].length) {
                maxIndex = i
            }
            else {
                maxIndex = i++;
            }
        }
        longestUniqueNode = uniqueNodes[maxIndex];
    } else {
        longestUniqueNode = uniqueNodes[0];
    }

    return longestUniqueNode;
}

function countDepthOfLongestNode(tree) {
    const  longestNode = checkForLongestUniqueNode(tree);
    return longestNode.length;
}

console.log(checkForLongestUniqueNode(tree));
console.log(countDepthOfLongestNode(tree));

// these are the nodes in the tree
// [1, 2, 2]
// [1, 2, 1]
// [1, 3, 4]
// [1, 3, 1]