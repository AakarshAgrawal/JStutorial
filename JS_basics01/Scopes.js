/* Let's break down block scope, global scope, and function scope — three important concepts in programming that determine the lifetime and visibility of variables.

🔹 1. Global Scope
Definition: A variable has global scope if it's declared outside of all functions or blocks.

Access: It can be accessed anywhere in the program — inside functions, blocks, etc.


var globalVar = "I'm global!";
function sayHello() {
  console.log(globalVar); // Accessible here
}

sayHello();
console.log(globalVar); // Accessible here too



🔹 2. Function Scope
Definition: A variable has function scope if it's declared inside a function. It can only be accessed within that function.

Keywords: In JavaScript, variables declared with var inside a function are function-scoped.


function greet() {
  var message = "Hello!";
  console.log(message); // Works fine
}

greet();
console.log(message); // ❌ Error: message is not defined



🔹 3. Block Scope
Definition: A variable has block scope if it is declared inside a block { ... } (like in if, for, while blocks).

Keywords: In JavaScript, let and const are block-scoped.


{
  let name = "Aakarsh";
  const age = 22;
  console.log(name); // Aakarsh
}

console.log(name); // ❌ Error: name is not defined


Another example with if:

if (true) {
  let x = 10;
  var y = 20;
}
console.log(x); // ❌ Error: x is not defined (block scope)
console.log(y); // ✅ 20 (function/global scope because of `var`)



📌 Summary Table:
Scope Type	    Declared In	                      Accessible In	                                  Keywords
Global Scope	Outside any function/block	      Anywhere	                                      var, let, const
Function Scope	Inside a function	              Only inside that function	                      var
Block Scope	    Inside {} block   	              Only inside that block	                      let, const */