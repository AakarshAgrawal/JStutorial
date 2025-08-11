/* type  conversion of numbers, strings are supported in js */
let age = 33; // number value
console.log(age);
console.log(typeof age) // outputs "number"
let Age = "33"
console.log(typeof Age); // outputs "string"
let NewAge = Number (Age); // converts string "33" to Number 33;
console.log(NewAge);
console.log(typeof NewAge); //outputs "number"

/* Similarly we can type convert numbers to string */ 
let phnNo = 123456;
console.log(typeof phnNo); //Outputs "number"

let PhnNo = String(phnNo);
console.log(typeof PhnNo); // "number converted to string"


/* when we try to convert a string to number that is not valid ex: "34abc" then it converts into NaN (Not a Number) */
let PHNno = "123abc"
let PHNNO = Number(PHNno);
console.log(PHNNO); //Outputs NaN
console.log(typeof PHNNO); //Outputs "number"


//The Table below Describes outputs to various type conversion in Javascripts //

 /*  Value	To Number	To String	  To Boolean
     "123"	  123	     "123"	        true
     "abc"	  NaN	     "abc"	        true
     true	   1	    "true"	        true
     false	   0	    "false"	        false
     null	   0	    "null"	        false
   undefined   NaN	   "undefined"	    false
   ""(empty)   0	      ""	        false */