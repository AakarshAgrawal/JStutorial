// Javascript has built in Number() and Math() objects that contains various operations, Properties, and predifined values that can be used in  code.
// JavaScript’s Number can be used in two different ways: 


// /*As a function (type conversion)
Number("42");      // 42 (number)
Number(true);      // 1
Number(false);     // 0
Number(null);      // 0
Number("3.14");    // 3.14
Number("abc");     // NaN
// This converts values to primitive numbers.*/


//  As a constructor (new Number())

let numObj = new Number(42); // this creates a new object of type number, using this we can use various predifined properties and methods associated with Number().
console.log(numObj);        // [Number: 42]
console.log(typeof numObj); // "object"

// Number has useful static properties

console.log(Number.MAX_VALUE);       // Largest possible number
console.log(Number.MIN_VALUE);       // Smallest positive number
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN);             // NaN

// 3. Static Methods

Number.isNaN(NaN);          // true
Number.isFinite(42);        // true
Number.isFinite(Infinity);  // false
Number.isInteger(42);       // true
Number.parseInt("42px");    // 42
Number.parseFloat("3.14");  // 3.14

// 4. Number Object Methods
// These work on both number primitives and Number objects:

let n = 123.456;

n.toFixed(2);      // "123.46"  (string with 2 decimal places)
n.toExponential(2);// "1.23e+2" (scientific notation)
n.toPrecision(4);  // "123.5"   (total digits)
n.valueOf();       // 123.456   (primitive value)   