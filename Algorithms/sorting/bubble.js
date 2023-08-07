// O (n^2)
const bubbleSort = (arr) => {
    let tmp;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }

    return arr;
}

console.log(bubbleSort([2, 3, 1, 100, 234, 99, 78]));
