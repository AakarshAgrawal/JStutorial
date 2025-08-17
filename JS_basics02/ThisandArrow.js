//when we use `this` in a regular function, it refers to the object that calls the function.
const person = {
    username: "Aakarsh",
    greet: function() {
        console.log("hello, " + this.username);
        }
}
person.greet(); // Output: hello, Aakarsh

//when we use this in an arrow function, it does not refer to the object but to the global context.
const peroson2 = {
    username : "Aakarsh",
    greet: () => {
        console.log("hello, " + this.username);
    }
}
person2.greet(); // Output: hello, undefined