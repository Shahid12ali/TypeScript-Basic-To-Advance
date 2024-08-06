// Ternary Operators:
// Conditional Ternary Operator Or Ternary Operator Concise Way to write an if-else statement in a single line.

// Syntax:
// condition ? expression_if_true : expression_if_false;

// 1. Example:
// if_else statement

let marks : number = 100;
if(marks >=70 ) {

    console.log("Pass");

}else {
    console.log("Fail");
}


// Ternary Operator
let marksVerify = marks >= 70 ?  "Pass" : "Fail";
// Condition      if-true          if-false
console.log(marksVerify);




// 2. Example:

let num1 : number = 5;
if(num1 % 2 === 0) {

    console.log("Number is Even");

}else {

    console.log("Number is Odd");
}


// Ternary Operator
let res = num1 % 2 === 0 ? "Number is Even" : "Number is Odd";
//           Condition         if-true           if-false
console.log(res);