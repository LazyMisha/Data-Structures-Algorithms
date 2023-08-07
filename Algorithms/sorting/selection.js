// O (n^2)
const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        let tmp = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }

        arr[i] = arr[minIndex];
        arr[minIndex] = tmp;
    }

    return arr;
}

console.log(selectionSort([2, 3, 1, 100, 234, 99, 78]));
