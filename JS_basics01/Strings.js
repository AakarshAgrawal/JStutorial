const name = "aakarsh";
const repocount = 50;

console.log(name +' '+ repocount); //usual method to concatenate
console.log(`Hello my name is ${name} and my repo count is ${repocount}`); //more sophisticated way of concatenation


let multiline = `This is
a multi-line
string.`;
console.log(multiline);

// strings can also be declared using string constructors, creating objects

let strobj = new String("Aakarsh");
console.log(strobj); // returns Aakarsh
console.log(typeof strobj);// return object

// we can use string's properties and methods using both  primitive string and object string (constructor)

// Case Conversion:
"hello".toUpperCase(); // "HELLO"
"HELLO".toLowerCase(); // "hello"

console.log(strobj[0]); // returns 0th position character from string i.e. A

console.log(strobj.length); // returns the length of the string

// Searching methods with String 

let str = "I love JavaScript";
str.indexOf("love");    // 2  (first occurrence)
str.lastIndexOf("a");   // 10 (last occurrence)
str.includes("Java");   // true
str.startsWith("I");    // true
console.log(str.endsWith("t")); // true


// Extracting methods with string

let s = "Hello World";
s.slice(0, 5);    // "Hello" (start, end)
s.substring(0, 5); // "Hello" (no negative indexes)
s.substr(6, 5);    // "World" (start, length)
console.log(s.slice(-5,-2 )); // Slice method supports negative indexing, i.e counts from backwards.

// Replacing

"Hi World".replace("World", "JavaScript"); // "Hi JavaScript"


// Trimming

"   Hello   ".trim();      // "Hello"  it trimmed the empty spaces
"   Hello   ".trimStart(); // "Hello   "
"   Hello   ".trimEnd();   // "   Hello"

//Splitting & Joining
//split() methods turns the string into array based on the separator.

let text = "red,green,blue";

console.log(text.split(","));   
// ["red", "green", "blue"]

console.log(text.split(",", 2)); 
// ["red", "green"] (limit = 2)

console.log(text.split(""));    
// ["r", "e", "d", ",", "g", ...] (split into characters)

console.log(text.split());      
// ["red,green,blue"] (no separator → whole string as one element)


// join() method combines an array into a string with a specified separator.
let colors = ["red", "green", "blue"];

console.log(colors.join());      
// "red,green,blue" (default comma)

console.log(colors.join(" - ")); 
// "red - green - blue"

console.log(colors.join(""));    
// "redgreenblue" (no separator)