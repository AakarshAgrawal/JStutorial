/* What is Control Flow?

 Control flow is the order in which the statements in your JavaScript program are executed.
 By default, code runs top to bottom, but with control flow structures, we can change the order (branching, looping, skipping, etc.).
*/
// *Conditional Statements*
// Used to make decisions in code

// (1. if...else) :
//   Executes a block of code if a specified condition is true, otherwise executes another block of code.

let age = 18;

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}
// output: You can vote


// (2. if...else if...else) :
//   Allows you to check multiple conditions sequentially.

let marks = 85;
if (marks >= 90) {
  console.log("A Grade");
} else if (marks >= 75) {
  console.log("B Grade");
} else {
  console.log("C Grade");
}
// output: B Grade

// (3. switch) :
//   Evaluates an expression and executes code blocks based on matching cases.
// DEFAULT case is executed if no cases match.

let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}
// output: Wednesday

//4. Ternary Operator (Conditional Operator) :
//   A shorthand for if...else statements, useful for simple conditions.    
 SYNTAX: condition ? expressionIfTrue : expressionIfFalse


let isAdult = (age >= 18) ? "Yes, you are an adult." : "No, you are not an adult.";


//5. Jumping Statements
// Used to alter the flow immediately.

// break → exits loop/switch

for (let i = 1; i <= 5; i++) {
  if (i === 3) break; 
  console.log(i);  // prints 1,2 then stops
}

//continue → skips current iteration

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; 
  console.log(i);  // skips 3
}