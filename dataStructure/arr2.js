// This methode is only using in sorted arrays

const prompt = require('prompt-sync')();

let num = parseInt(prompt('Enter a number to search: '))
let arr = [1, 2, 3, 4, 5, 7, 9]

function binerySearch(arr, num) {
    let middlenum = Math.floor((arr.length - 1)/2)
    let check = true;

    for(let i = 0;i < arr.length; i++) {
        if(arr[middlenum] == num) {
            check = false
            return arr[middlenum];
        } else if(arr[middlenum] > num) {
            middlenum -= 1;
        } else if (arr[middlenum] < num) {
            middlenum += 1;

        }else {
            return "no matches"
        }
    }
}

console.log(binerySearch(arr, num));