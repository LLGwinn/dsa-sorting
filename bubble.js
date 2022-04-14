function bubbleSort(arr) {
    for (let i=0; i<arr.length; i++) {
        let swapped = false;
        for (let j=0; j<arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                swapped = true;
            }
        }
        if (swapped === false) break;
    }
    return arr;
}

module.exports = bubbleSort;