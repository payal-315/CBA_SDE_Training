// Create a Function to Find the Largest Number
// Problem Statement: Write a function named findLargest() that accepts two numbers as parameters and returns the larger number.

function findLargest(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

let result = findLargest(35, 50);
console.log("Largest Number: " + result);
