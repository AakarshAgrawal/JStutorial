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