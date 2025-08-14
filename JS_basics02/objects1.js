// we will learn about objects in JavaScript
// In JavaScript, an object is a fundamental data type that stores a collection of key-value pairs.
//  It's a versatile container you can use to group related data and functionality. 
// Objects can represent real-world entities, configurations, or any structured data.
// Objects can hold various types of values, including numbers, strings, arrays, functions, and even other objects.
// They are mutable, meaning you can change their properties and values after creation.         


 // 1.Creating Objects in JavaScript: 
 // there are two main ways to create an object in JavaScript: using object literals or the `new Object()` syntax.

// 1.1 Object literals: are the most common way to create objects in JavaScript.
// They are defined using curly braces `{}` and consist of key-value pairs, where keys are strings (or Symbols) and values can be of any type.

const person = {
    name: "Aakarsh Agrawal",
    age: 24,
    occupation: "Software Engineer",
}
console.log(person); // Output: { name: 'Aakarsh Agrawal', age: 24, occupation: 'Software Engineer' }


//1.2 new Object() syntax: This is a less common way to create objects, but it can be useful in certain situations.
let car = new Object(); // Creates an empty object
car.company = "Tesla"; // Adds a property
car.model = "Model S"; // Adds another property
car.year = 2023; // Adds yet another property

car.engine = function() {                              // adding a method to the object
  console.log("This cas has a electric powered engine")
}

console.log(car); // Output: { company: 'Tesla', model: 'Model S', year: 2023, engine: [Function] }
car.engine(); // Output: This car has an electric powered engine

//2.Accessing Object Properties 
// You can access object properties using either dot notation or bracket notation.

// 2.1 Dot notation: This is the most common way to access properties.
console.log(person.name); // Output: Aakarsh Agrawal
console.log(car.company); // Output: Tesla

// 2.2 Bracket notation: This is useful when property names are dynamic or contain special characters.
console.log (person["age"]); // Output: 24
console.log(car["model"]); // Output: Model S