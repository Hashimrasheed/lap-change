//this program is to search a value is there included or not

const prompt = require('prompt-sync')();

let num = parseInt(prompt('Enter a number to search: '))
let arr = [1, 5, 6, 9, 3, 6, 2];

function checknum(arr, num) {
    for( let i = 0; i < arr.length; i++) {
        if(arr[i] === num) {
            return true
        }
    }
    return false
}

console.log(checknum(arr, num));