// Operators in JavaScript


/*  Comparison Operators:

   ==   // Equal (checks value only)
   ===  // Strict Equal (checks value + type)
   !=   // Not equal
   !==  // Strict not equal
    >    // Greater than
    <    // Less than
   >=   // Greater than or equal
   <=   // Less than or equal
*/

/* 
Ternary Operator (Conditional Operator) Shorthand for if...else.
syntax: condition ? expressionIfTrue : expressionIfFalse
example:    
let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote); // Output: Yes, you can vote 
*/

//(********************************************************************************************************************************************)

/* Comparison Examples: 

1. null vs undefined
console.log(null == undefined);   // true
console.log(null === undefined);  // false 


2. true / false with numbers
console.log(true == 1);   // true
console.log(false == 0);  // true
console.log(true === 1);  // false


3. String vs Number
console.log("10" == 10);  // true
console.log("10" === 10); // false


4. 0, "", null, undefined, NaN
console.log(0 == false);   // true
console.log("" == false);  // true
console.log(null == 0);    // false
console.log(undefined == 0); // false
console.log(NaN == NaN);   // false   NaN is never equal to anything, even itself.

5. Objects & Arrays
console.log([] == []);        // false
console.log({} == {});        // false
console.log([] == false);     // true
console.log([1,2] == "1,2");  // true


7. Boolean coercion
console.log(Boolean(""));    // false
console.log(Boolean(" "));   // true (space is non-empty string)
console.log(Boolean([]));    // true (array is object)
console.log(Boolean({}));    // true (object is truthy)


Quick Cheat Sheet of Truthy/Falsy values in JS:

Falsy values: false, 0, "", null, undefined, NaN
Everything else is truthy (including [], {}, " ").


*/
//(********************************************************************************************************************************************)
/* Type Coercion in JavaScript:

 Type coercion in JavaScript means automatic conversion of values from one type to another when operators (==, +, -, etc.) are applied.

1. String + Number
 console.log("5" + 2);   // "52"
 console.log(2 + "5");   // "25"

✅ If one operand is a string and '+' is used → JS performs string concatenation.


2. String + Boolean
 console.log("5" + true);  // "5true"   
console.log(false + "5"); // "false5"


3. Number - String
console.log("5" - 2);   // 3
console.log("10" * "2"); // 20

✅ For -, *, /, JS converts strings to numbers.


4. Boolean with Number
console.log(true + 1);  // 2
console.log(false + 10); // 10
true → 1, false → 0.


5.Null and Undefined
console.log(null + 1);      // 1
console.log(undefined + 1); // NaN

✅ null → 0 in numeric context.
✅ undefined → NaN in numeric context.

6. == (loose equality) quirks
console.log(0 == false);  // true
console.log("0" == false); // true
console.log(null == 0);   // false
console.log(null == undefined); // true


7. Empty Array/Object
console.log([] + []);   // ""   (empty string)
console.log([] + {});   // "[object Object]"
console.log({} + []);   // 0   (weird one!)
✅ Arrays/objects are coerced to strings when + is used.
✅ {} at the beginning of a line is treated like an empty block, not an object → hence {} + [] = 0.

8. Boolean Coercion
console.log(Boolean(""));   // false
console.log(Boolean(" "));  // true
console.log(Boolean([]));   // true
console.log(Boolean({}));   // true

*/
