// in javascript Math() is a built-in object that contains properties (constants) and methods (functions) for mathematical calculations.

//  Common Math Methods
// 🔹 Rounding & Absolute Value

Math.round(4.7); // 5   (round to nearest integer)
Math.floor(4.7); // 4   (round down)
Math.ceil(4.2);  // 5   (round up)
Math.trunc(4.9); // 4   (remove decimal part)
Math.abs(-5);    // 5   (absolute value)

// 🔹 Powers & Roots

Math.pow (2, 3);  // 8       (2^3)
Math.sqrt(25);    // 5       (square root)
Math.cbrt(27);    // 3       (cube root)
Math.hypot(3, 4); // 5       (√(3² + 4²))

// 🔹 Min & Max

Math.min(5, 1, 8); // 1
Math.max(5, 1, 8); // 8

// 🔹 Random Numbers

Math.random(); // random number between 0 (inclusive) and 1 (exclusive)

// Random integer between min and max (inclusive)

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10));

// 🔹 Trigonometry

Math.sin(Math.PI / 2); // 1
Math.cos(0);           // 1
Math.tan(Math.PI / 4); // 1
Math.asin(1);          // 1.5707963267948966 (π/2)
Math.acos(0);          // 1.5707963267948966 (π/2)
Math.atan(1);          // 0.7853981633974483 (π/4)


// 3. Math Constants

Math.PI;        // 3.141592653589793
Math.E;         // 2.718281828459045
Math.SQRT2;     // √2 ≈ 1.4142135623730951
Math.SQRT1_2;   // √(1/2) ≈ 0.7071067811865476
Math.LN2;       // ln(2) ≈ 0.6931471805599453
Math.LN10;      // ln(10) ≈ 2.302585092994046
Math.LOG2E;     // log₂(e) ≈ 1.4426950408889634
Math.LOG10E;    // log₁₀(e) ≈ 0.4342944819032518
