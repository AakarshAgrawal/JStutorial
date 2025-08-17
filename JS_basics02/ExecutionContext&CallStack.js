// BUG //  **Execution Context and Call Stack** 

//Execution Context:
//Execution Context is the environment in which JavaScript code is evaluated and executed. 
// Think of it as a "box" that contains all the information needed to run a piece of code.

//It contains information about:
// Variables
// Functions
// this keyword
// Scope chain

//There are two main types of execution contexts:

//(1) Global Execution Context (GEC):
/// This is the default or base context. It's created when your script first starts to run. It performs two main tasks:
// Creates a global object, which is window in a web browser or global in Node.js.
// Sets the value of the 'this' keyword to point to the global object.
//There can only be one GEC in a program.

//(2) Function Execution Context (FEC): 
//A new function execution context is created every single time a function is called. 
//Each function gets its own private world to operate in, with its own variables that other functions can't access directly.

// The Two Phases of an Execution Context, Every execution context is created in two phases:

// (1.) Creation Phase (or Memory Creation Phase)
// Before a single line of code is executed, the JavaScript engine scans the code and sets up memory for the variables and functions.
//  This is where hoisting occurs.

// Variables: For variables declared with var, they are allocated memory and initialized with a special value of undefined.
//  For let and const, they are allocated memory but are not initialized, placing them in a "Temporal Dead Zone" (TDZ) until the line where they are declared is executed.

// Functions: For function declarations, their entire code is placed into memory. 
//  This is why you can call a function before you've declared it in your code.

// this and Environment: The value of this is determined, and a reference to its outer lexical environment (the "scope chain") is established.

//(2. Execution Phase)
// After the creation phase is complete, the engine goes through the code line by line and executes it. 
// It assigns the actual values to variables, calls functions, and runs the logic.


// Call Stack:
/* The Call Stack is a data structure that records the position of the script in its execution. 
It operates on a LIFO (Last-In, First-Out) principle. 
Think of it like a stack of plates: you can only add a new plate to the top, and you can only remove the top plate.

The call stack's job is simple:

Track Execution: It keeps track of which function is currently being run.
Manage Contexts: Whenever a function is called, its Function Execution Context is created and pushed onto the top of the stack.
Return Control: When the function finishes (i.e., hits a return statement or the end of its code),
its context is popped off the stack, and control returns to the context below it.


Step-by-step execution:
 
Global Execution Context is created and pushed to call stack
first() is called → Function Execution Context for first() is created and pushed to stack
Inside first(), second() is called → Function Execution Context for second() is pushed to stack
Inside second(), third() is called → Function Execution Context for third() is pushed to stack
third() completes → its context is popped from stack
second() completes → its context is popped from stack
first() completes → its context is popped from stack
Only Global Execution Context remains

*/