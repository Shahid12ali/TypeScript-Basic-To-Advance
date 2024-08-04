// 1. var

// var can be redeclared and reassigned.
// function-scoped or globally scoped.
// Not recommended for use in modern typescript

var myName : string = "Shahid Ali";     // myName declared
var myName : string = "Mazari";         // myName redeclared
myName = "Hello, world";                // reassigned



// 2. let
// let can be reassigned but cannot be redeclared.
// let declarations are blocked-scoped.

let my_Name : string = "Shahid Ali";     // my_Name declared
//let my_Name : string = "Mazari";         // my_Name cannot be redeclared
my_Name = "Hello, world";                // can be reassigned



// 3. const
// const cannot be redeclared and reassigned.
// const declaratoins are blocked-scoped, similar to 'let'.

const myNumber : number = 786;   // Declared
// const myNumber : number = 888;  // cannot redclared
// myNumber = 567;                 // cannot be reassigned


//  Recommendations: Good practice to use 'const' by default and only use 'let' when you need to reassign
//  a variable. Avoid using  'Var';