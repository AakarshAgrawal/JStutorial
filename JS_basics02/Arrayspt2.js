const marvelheros = ["ironMan", "spiderMan", "Thor", "BlackPanther"];
const DCheros = ["Batman", "Superman", "Joker"];


marvelheros.push(DCheros);  // we can push anything in the array, for ex: number, string, character, Another Array also
console.log (marvelheros);  //output: ['ironMan','spiderMan','Thor','BlackPanther', [ 'Batman', 'Superman', 'Joker' ]]


marvelheros.concat(DCheros); //this concatnates the second array inside the first array
console.log(marvelheros); //output: ['ironMan','spiderMan','Thor','BlackPanther', [ 'Batman', 'Superman', 'Joker' ]]


// The spread operator (...) expands an array, object, or iterable into individual elements.
// It’s like taking the contents out of a container.
const all_heros = [...marvelheros, ...DCheros];   // this spreads the content of both arrays and combine them all in one single array
console.log(all_heros); //output: ["ironMan", "spiderMan", "Thor", "BlackPanther", "Batman", "Superman", "Joker"]


// The flat() method creates a new array with all nested sub-arrays flattened into it up to a specified depth.
// it is used to flatten nested arrays in the single  array.

const nestedArray = [1, 2 , [[3, 4], [5, 6, 7]]];
const flatarray = nestedArray.flat(Infinity); // here infinity is used to define the depth to which we want our nested array to be flattned

console.log(flatarray);// output :[ 1, 2, 3, 4, 5, 6, 7]

// Array.from() method is used to convert any string or object to array
console.log(Array.from("aakarsh")); //Output: [ 'a', 'a', 'k', 'a', 'r', 's', 'h' ]

console.log(Array.from({name : "Aakarsh"})); //Output: [] empty array. 
// Explanation: 
// Array.from() can create an array from an object —but only if 
// that object is either: Iterable (e.g., a string, Set, Map) 
// Array-like (has a length property and indexed elements)
// If it’s just a plain object without these characteristics, Array.from() can’t do anything useful and will return an empty array.



// Array.isArray() Checks if a value is an actual array.
console.log(Array.isArray("aakarsh"))  // output: false


//Array.of() method: creates a new array from the arguments you give it — no matter how many or what they are.
let score1 = 300;
let score2 = 500;
let score3 = 400;


console.log(Array.of(score1, score2, score3)); // output: [ 300, 500, 400 ]