//Selection sorting

const prompt = require('prompt-sync')();

let arr = [];
let temp = 0;

let len = parseInt(prompt('Enter a limit to array: '))
for(let i = 0; i < len; i++) {
    arr[i] = parseInt(prompt());
}

function selectionSort(arr) {
    let min;
    for(let i = 0; i < arr.length; i++) {
        min = i;
        for(let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        if(min != i) {
            temp = arr[i]
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    console.log(arr);
}
selectionSort(arr);