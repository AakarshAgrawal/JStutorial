// An array is a special object in JavaScript used to store ordered collections of values.
// Values can be of any type (numbers, strings, objects, functions, even other arrays).


// MDN Array Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const myArr = [130, 100, 22, 300, 49, 57];
console.log(myArr)

const OnePiece = ['Luffy', 'Zoro', 'Sanji', 'Ussop', 'Robin'];
console.log(OnePiece);

//more ways creating array
let arr2 = new Array(1, 2, 3);        // Constructor syntax
let arr3 = new Array(3);              // Creates empty array of length 3

//Methods in arrays:

const newArr = myArr.join(); //creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string
console.log(newArr);

myArr.push(6); // Inserts a element at the end of the array
console.log(myArr);

myArr.pop();
console.log(myArr) //Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

myArr.unshift(9); // Adds a element at the start of the array
console.log(myArr);

console.log(myArr.shift()); //Removes the first element from the array
console.log(myArr);


console.log(myArr.indexOf(4)); //Returns the index of the first occurrence of a value in an array, or -1 if it is not present.


console.log(myArr.includes(9)); //Search for the element in the array and returns True if present and false if not.

//Slice and Splice

let arr = [10, 20, 30, 40, 50]; 
let part = arr.slice(1, 4)  ;  // Extracts a portion of the array without modifying the original array, Returns: A new array. 
console.log(part);

let part2 = arr.splice(1,3); // Adds, removes, or replaces elements in the original array.Returns: An array containing the removed elements.
             // takes input: starting index from where to start removing and count how many elements to remove.
             // splice modifies the original array
console.log(part2);



//reverse
let arr4 = [1, 2, 3, 4, 5];
arr4.reverse(); // Reverses the order of the elements in the array
// Output: [5, 4, 3, 2, 1];



//sort
let arr5 = [5, 3, 8, 1, 2];
let sortedArr = arr5.sort(function(a, b){
    return a - b; // Sorts the array in ascending order, b - a for descending order.
});
// Output: [1, 2, 3, 5, 8]



//forEach: it executes a provided function once for each array element.
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(num) {
    console.log(num+5); 
}); // Output: 6 7 8 9 10



//map: Creates a new array by applying a given function to each element of the original array.
//     It does not modify the original array.
let newarr = numbers.map(function(num) {
    return num * 2; 
});
console.log(newarr); // Output: [2, 4, 6, 8, 10]


//filter: Creates a new array with all elements that pass the test implemented by the provided function.
let filteredArr = numbers.filter(function(num) {
    return num > 2; 
});
console.log(filteredArr); // Output: [3, 4, 5]



//reduce: is another powerful array method, often used to accumulate values into a single result.
// What reduce() Does
// Processes each element of an array from left to right.
// Carries forward an accumulator (a running total or result) across iterations.
// Returns a single value (number, string, object, array, etc.).
// Does not modify the original array.

let ans = numbers.reduce(function(accumulator, currentValue ) {
    return accumulator + currentValue; // Sums up all the elements in the array
}, 0 ); // Initial value of accumulator is set to 0
console.log(ans); // Output: 15


// find: Returns the first element in the array that satisfies the provided testing function.
let found = numbers.find(function(num) {
    return num > 3; 
});
console.log(found); // Output: 4 (the first number greater than 3)


//some: Tests whether at least one element in the array passes the test implemented by the provided function.
let ans = numbers.some(function(num) {
    return num > 3; 
});
console.log(ans); // Output: true (because 4 and 5 are greater than 3)


//every: Tests whether all elements in the array pass the test implemented by the provided function.
let allGreaterThanZero = numbers.every(function(num) {
    return num > 0; 
});
console.log(allGreaterThanZero); // Output: true (because all numbers are greater than 0)