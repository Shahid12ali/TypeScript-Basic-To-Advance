// 1. Characters:
// Allowed :


// (i). Letters (a-z, A-Z),

let myname : string = "Shahid";   // OK
let MYNAME : string = "Ali";      // OK
let MyName : string = "Mazari";   // OK

// (ii). Digits (0-9),

let myname1 : string = "Shahid";   // OK
let MY2NAME : string = "Ali";      // OK
// let 1MyName : string = "Mazari";   // Error You dont have start variable name with number


// (iii). UnderScore ( - ),

let my_name : string = "Shahid";   // OK
let MYNAME_ : string = "Ali";      // OK
let My_12Name : string = "Mazari";   // OK
let _MyName : string = "Mazari";   // OK


// (iv). Dollar Sign ( $ ),

let myname$ : string = "Shahid";   // OK
let MY$NAME_ : string = "Ali";      // OK
let $MyName : string = "Mazari";   //   not Recommended



// Not Allowed
// Spaces Or Other Special Characters (Except _ and $).
// Special Characters Are Not Allowed

// let my name : string = "Shahid Ali";  // Not Allowed
// let @myname : string = "Shahid Ali";  // Not Allowed
// let !myname : string = "Shahid Ali";  // Not Allowed



// 2. Case Sensitivity:

// Variable names are case-sensitive.
// For example, age, Age, and AGE, are considered different variables.

// All three are different variables
let age : number = 20;
let Age : number = 20;
let AGE : number = 20;



// 3. Descriptive names:

// Use clear names that reflect the variabls purpose.
// Avoid using single-letter.

let a : number = 1234;                 // Not recommended
let myNumber : number = 1234;          // This is okay



// 4. Naming Conventions: (Recommended)

// Use Camel-Case
// e.g. customerName, isLoggedIn

let customerName : string = "Shahid Ali";    // Always Recommended
let customer_Name : string = "Shahid Ali";   // Always Recommended



// 5. Keywords:

// Avoid using reserverd keywords as variable names.
// (e.g., let, const, function, array, object).

// let const : string = "Shahid Ali";             // reserved keyword
// let var : number = 1234;                       // reserved keyword
// let function : string = "Hello!"               // reserved keyword
// let Array : string[] = ["Hello!", "World"];    // reserved keyword
