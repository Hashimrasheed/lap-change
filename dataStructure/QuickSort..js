function quickSort(array) {
    if(array.length === 1) {
        return array;
    }
    
    const pivet = array[array.length - 1];
    const leftArr = [];
    const rightArr = [];

    for(let i = 0; i < array.length - 1; i++) {
        if(array[i] < pivet) {
            leftArr.push(array[i]);
        }else {
            rightArr.push(array[i]);
        }
    }
    if(leftArr.length > 0 && rightArr.length > 0) {
        return [...quickSort(leftArr), pivet, ...quickSort(rightArr)]
    } else if(leftArr > 0) {
        return [...quickSort(leftArr), pivet]
    } else {
        return [pivet, ...quickSort(rightArr)]
    }
}

const arr = [1, 45, 983, 2, 5, 2432, 53,2];
console.log('hi');
console.log(quickSort(arr));