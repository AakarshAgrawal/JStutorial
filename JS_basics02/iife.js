// Immediately Invoked Function Expression (IIFE):
// iife are functions that are executed immediately after they are defined. 
// This is useful for creating a private scope and avoiding polluting the global namespace.



// to make a function an IIFE, we wrap it in parentheses and then call it with another set of parentheses.

(function() {
    console.log("This is an IIFe");
} )();
// Output: This is an IIFe


// IIFEs can also accept parameters:
(function(name) {
    console.log("Hello, " + name + "!");
})("Aakarsh");
// Output: Hello, Aakarsh!  


// IIFEs can also be created using arrow function syntax:
( () => {
    console.log("This is an IIFE using arrow function syntax");
})();
// Output: This is an IIFE using arrow function syntax


// we can also create named IIFE functions :
(function namedIIFE() {
    console.log("this is a named IIFE");
})();
// Output: this is a named IIFE