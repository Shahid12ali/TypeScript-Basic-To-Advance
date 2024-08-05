// Operators :
// Operators are symbol or keywords used to perform operations on data

// Arithmetic Operators:

// 1. + Addition (numbers or string concatenation);

// number addition
let num1 : number = 35;
let num2 : number = 15;
let sumOfNumber: number = num1 + num2;
console.log(sumOfNumber);  // output 50;


// String concatenation
let myName : string = "Shahid";
let myName2: string = "Ali";
let result : string = myName + " " + myName2;
console.log(result); // output Shahid Ali



// 2. - Subtraction 
let num3 : number = 70;
let num4 : number = 47;
let results : number = num3 - num4;
console.log(results);   // Output  23;



// 3. * Multiplication 
let num5 : number = 8;
let num6 : number = 7;
let resultss : number = num5 * num6;
console.log(resultss);   // Output  56;



// 4. / Division 
let num_5 : number = 100;
let num_6 : number = 5;
let result_a : number = num_5 / num_6;
console.log(result_a);   // Output  20;



// 5. % Module (remainder after division)
let num_1 : number = 50;
let num_2 : number = 3;
let resultm : number = num_1 % num_2;
console.log(resultm);        // Output  2



// 6. ++ Increment (adds 1 to a variable)
let number1 : number = 55;
console.log(number1);   // Output 55
number1++;
console.log(number1);   // Output 56




// 7. -- Decrement (subtracts 1 from a variable)
let numb : number = 50;
console.log(numb);   // Output 50
numb--;
console.log(numb);   // Output 49



// Assignment Operators:
// = Assignment
let myName1: string = "Shahid Ali";  // here = is used as assignment operator



// ' += ', ' -= ', ' *= ', ' /= ', Compound assignment (performs operation and assigns result);

let num : number = 30;
console.log(num);   // Output 30

num += 40;
console.log(num);   // Output 70



// Comparison Operators:

// 1. == Equal to (loose comparison, not recommended for strict comparisons)

let Num1 : number = 55;
let Nume2: string = "55";
// console.log(Num1 == Nume2);  // Error (ignore for time bieng)
// check only values 



// 2. === Strictly Equal to (check type and value)


let NumA1 : number = 55;
let NumeA2: string = "55";
// console.log(NumA1 === NumeA2); 
// check type and values both