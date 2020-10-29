//Bubble sorting

const prompt = require('prompt-sync')();

let arr = [];
let temp = 0;

let len = parseInt(prompt('Enter a limit to array: '))
for(let i = 0; i < len; i++) {
    arr[i] = parseInt(prompt());
}

//sorted arary

function bubbleSort(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < i; j++) {
            if(array[i] < array[j]) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp; 
            }
        }
    }

    console.log(array);
}
bubbleSort(arr);