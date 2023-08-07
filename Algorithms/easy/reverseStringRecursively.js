//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
    if (str.length === 1) {
        return str;
    }

    return reverseString(str.substring(1)) + str[0];
}

console.log(reverseString('yoyo mastery'));
//should return: 'yretsam oyoy'
