const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//O(n log n)
const quickSort = (arr) => {
    if (arr.length <= 1) {
        // Base case: arrays with 0 or 1 element are already sorted
        return arr;
    }

    // Choose the pivot element
    const pivot = arr[Math.floor(arr.length / 2)];
    // Array to store elements less than the pivot
    const left = [];
    // Array to store elements greater than the pivot
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            // Elements less than the pivot go to the left array
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            // Elements less than the pivot go to the right array
            right.push(arr[i]);
        }
    }

    // Recursively apply quick sort to the left and right sub-arrays,
    // and combine them with the pivot
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const quickSort1 = (arr, left, right) => {
    let pivot;
    let partitionIndex;

    if (left < right) {
        pivot = right;
        partitionIndex = partition(arr, pivot, left, right);

        // sort left and right
        quickSort1(arr, left, partitionIndex - 1);
        quickSort1(arr, partitionIndex + 1, right);
    }

    return arr;
}

function partition(arr, pivot, left, right){
    let pivotValue = arr[pivot];
    let partitionIndex = left;

    for (let i = left; i < right; i++) {
        if(arr[i] < pivotValue){
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }

    swap(arr, right, partitionIndex);

    return partitionIndex;
}

function swap(array, firstIndex, secondIndex){
    const temp = array[firstIndex];

    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}


console.log(quickSort(numbers));
//Select first and last index as 2nd and 3rd parameters
console.log(quickSort1(numbers, 0, numbers.length - 1));
