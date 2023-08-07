// O(n)
const factorialRecursive = (number) => {
    if (number < 2) {
        return number;
    }

    return number * factorialRecursive(number - 1);
}

// O(n)
const factorialIterative = (number) => {
    let result = 1;

    for (let i = 2; i <= number; i++) {
        result = result * i;
    }

    return result;
}

console.log(factorialIterative(5));
console.log(factorialRecursive(5));
