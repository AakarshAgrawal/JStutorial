// functions in javascript :
//function in JavaScript is a reusable block of code designed to perform a specific task.
//Instead of writing the same code again and again, you can define a function once and call it whenever needed.


//NOTE 1. Declaration of a function: 
// A function can be declared using the `function` keyword followed by a name, parentheses, and curly braces. 

function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Aakarsh"); // Output: Hello, Aakarsh!

// a function can also have parameters, which are placeholders for values that will be passed to the function when it is called.
// function parameters are defined within the parentheses of the function declaration.
// In the example above, `name` is a parameter of the `greet` function
 
// functions can also return values using the `return` statement.
function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // Output: 8

//NOTE 2. Function Expressions:
// Functions can also be defined as expressions, which means they can be assigned to variables.
const multiply = function(x, y) {
    return x * y;
}
console.log(multiply(4, 5)); // Output: 20


//NOTE 3. Rest Parameters (... ):
// Rest parameters allow a function to accept an indefinite number of arguments as an array.
// This is useful when you don't know how many arguments will be passed to the function.
function sum(...numbers) {
   return numbers.reduce((acc, curr) => acc + curr, 0); 
}
console.log(sum(1, 2, 3, 4, 5));


//NOTE 4. Arrow Functions: () => { } 
// Arrow functions provide a more concise syntax for writing functions.
const functionname = (parameters) => {
    //function body
    return expression; // optional      
}

//arrow functions can be used for single-line functions without curly braces and the `return` keyword.
const square = (x) => x * x;
console.log(square(6)); // Output: 36

const twosum = (a, b) => (a+ b); 
console.log(twosum(10, 20)); // Output: 30

const returnobject = (name, age) => ({ name: name, age: age });  // Using parentheses to return an object
console.log(returnobject("Aakarsh", 25)); // Output: { name: 'Aakarsh', age: 25 } 



//NOTE 5. 'this' keyword in JavaScript:
// The `this` keyword refers to the context in which a function is called.
// this can behave differently depending on how a function is invoked


//NOTE 5.1. this in the Global Context

//In browsers → refers to the window object.(global object in browsers).
//In Node.js → refers to an empty object {} (in modules).
console.log(this);  
// Browser → Window
// Node.js → {}

// If you use strict mode ('use strict'), the `this` keyword in the global context will be `undefined`.
'use strict';
console.log(this); 
// undefined (in strict mode global context)


// NOTE 5.2. this in Function Context
// In a regular function, `this` refers to the global object in non-strict mode.
function showThis() {
    console.log(this);
}       
showThis(); // In browsers: Window, In Node.js: {}  

// In strict mode, `this` will be `undefined`.
function showThisStrict() {
    'use strict';
    console.log(this);
}
showThisStrict(); // undefined


//note  5.3. this Inside an Object Method
// When a function is called as a method of an object, `this` refers to that object.
    const obj = {
        name: "Aakarsh"
        greet: function() {
            console.log("Hello, " + this.name); 
        }
    }
obj.greet(); // Output: Hello, Aakarsh


//NOTE 5.4. this in an Arrow Function
// Arrow functions do not have their own `this` context; they inherit `this` from the surrounding lexical scope.
const person = {
    name: "Aakarsh",
    greet: () => {
        console.log("Hello " + this.name);
    }
};
person.greet(); // "Hello undefined"





















