// O(n^2)
// 2, 3, 1, 100, 234, 99, 78
const insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        // if the next item smaller than the first item
        if (arr[i] < arr[0]) {
            // get and remove the smaller item from arr
            const [smallerItem] = arr.splice(i, 1);
            // move this item to the first place
            arr.unshift(smallerItem);
        } else {
            // if the item smaller that item at the left
            if (arr[i] < arr[i - 1]) {
                // find where number should go
                for (let j = 1; j < i; j++) {
                    // check that item could be set between items:
                    // the first one should be smaller and the second one should be bigger than current item
                    // if so, set the item between them
                    if (arr[i] >= arr[j - 1] && arr[i] < arr[j]) {
                        // get and remove the current item from the arr
                        const [currentItem] = arr.splice(i, 1);
                        // move number to the right (correct) spot
                        arr.splice(j, 0, currentItem);
                    }
                }
            }
        }
    }

    return arr;
}

console.log(insertionSort([2, 3, 1, 100, 234, 99, 78]));
