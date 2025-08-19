/* Loops (Iteration)
 Used to repeat code until a condition is met. */


 1.  // For Loop
 for (let i = 0; i < 5; i++) {
   console.log("Iteration:", i);
 } 


  2. //  nested For Loop
 for (let i = 0; i < 3; i++) {
   for (let j = 0; j < 2; j++) {
     console.log("Outer Loop:", i, "Inner Loop:", j);
   }
 }


 3. // While Loop 
let count = 0;
while (count < 5) {
  console.log("Count is:", count);
  count++;
}   



4. // Do While Loop
let number = 0;
do {
  console.log("Number is:", number);
  number++;
}while (number < 5); // Executes at least once      

5 // For...of Loop
const array = ['apple', 'banana', 'cherry'];
for (const fruit of array) {
  console.log("Fruit:", fruit);
}   
// OUTPUT: Fruit: apple, Fruit: banana, Fruit: cherry   


6. // For...in Loop
const person = { name: 'Alice', age: 30, city: 'New York' };
for (const key in person) {
  console.log(`Key: ${key}, Value: ${person[key]}`);
}
// OUTPUT: Key: name, Value: Alice; Key: age, Value: 30


7. // For each Loop
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num, index) => {
  console.log(`Index: ${index}, Number: ${num}`);
});
// OUTPUT: Index: 0, Number: 1; Index: 1, Number:   2; Index: 2, Number: 3; Index: 3, Number: 4; Index: 4, Number: 5
