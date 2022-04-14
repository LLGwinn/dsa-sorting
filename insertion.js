function insertionSort(arr) {
    let j = 1;

    function swap(i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    while (j < arr.length) {
        if (arr[j] < arr[j-1]) {
            for (let i=0; i<j; i++) {
                if (arr[j] < arr[i]) swap(i, j);
            }
        }
        j++;   
    }

    return arr;
}

module.exports = insertionSort;