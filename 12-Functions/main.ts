// function:
// functions are reusable blocks of code that perform specific tasks.

// 1. Basic Function
function greeting(name : string) {
    console.log(`Hello ${name} Wellcome To IT Initiative`);
}
greeting("Shahid");




//. 2 using function keywords (Named Function)
// Note All parameters are required
// Parameters
function myFun1 (num1 : number, num2 : number) {
    console.log(num1 + num2);
}
myFun1(2,8);




//. 3 Assigning A Variable That Called ==> Anonymous Function

let myFunction = function(num1 : number, num2 : number) : number {
    return num1 + num2;
};
console.log(myFunction(8, 5)); 





// Retrun type:
function Addition (num1 : number, num2 : number) : number {// return type will number// parameters
    return num1 + num2;
};
console.log(Addition(4, 5));  //  Arguments



// Retrun type stroring with variable
function guest (name : string) {
    return `Hello, ${name}`
};
let guestName : string = guest("Shahid");
console.log(guestName);





// Two Types Of Parameters: ( 1. Optional Parameters, 2. Default Parameters)

// 1. Optional Parameters : 
function greet (firstName : string, lastName? : string) {
    if (lastName) {
        console.log(`Hello!, ${firstName} ${lastName}`);

    }else {
        console.log(`Hello!, ${firstName}`);
    }     
};
greet("Shahid", "Ali");




// 2. Default Parameters
function studentDetail (name : string, campusName : string = "Governor house") {
    return `My Name is ${name}, And i Study in ${campusName}`;
}
console.log(studentDetail("Shahid"));



function studntDetails (name : string = "Shahid", campusName : string = "Governor house") {
    return `My Name is ${name}, And i Study in ${campusName}`;
}
console.log(studntDetails());




// Override
function studentDetails (name : string = "Shahid",  campusName :string = "Governor house") {
    return `My Name is ${name}, And i Study in ${campusName}`;
}
console.log(studentDetails("Ali", "Bahria Auditoriam"));




//. 4 Arrow Function => ( Arrow function is a short way to create a function)

let arrow = (name : string, age : number) => {

    return `Hello! ${name}-${age}`;
}
console.log(arrow("Shahid", 25));




//. 5 Callback Function
function callBack () {
    console.log("Hello,World");
}

function add1 () {
    console.log("Hello,Mr");
}


function add (num1 : number, num2 : number, callback : any) {
    console.log(num1 + num2);
    callback();
}
add(5,8,callBack);
add(2,6,add1);
add(8,9, function () {
    console.log("Anonymous Function");
});




// 6. Function Overloading;

// Overload Signature
function overLoadFun (fName : string, lName : string) : string;
function overLoadFun (fName : number, lName : number) : number;
function overLoadFun (fName : string, lName : number) : string;
function overLoadFun (fName : boolean, lName : boolean) : boolean;

// Implementation Signature
function overLoadFun (fName : any, lName : any) : any {
    return fName + " " + lName;
}
console.log(overLoadFun("Shahid", "Ali"));
console.log(overLoadFun(8, 4));
console.log(overLoadFun("Shahid", 42));
console.log(overLoadFun(true, false));




// 7. Recursive Function, (Recursive Function is A function that calls itself);
// function recursivefunc () {
//     console.log("Wellcome");
//     recursivefunc();        // Calling function in function // that means function stuck in loop
// }
// recursivefunc();



function recursivefun (count : number) {
    console.log("Wellcome");
    if (count >= 0) {
        recursivefun(count - 1); 
    }
           
}
recursivefun(5);






function recursivefunction (countNum : number) {
   
    if (countNum >= 0) {
//     if remove equal to sign to print perfect time        
        console.log("Count Number", countNum);
        recursivefunction(countNum - 1); 
    }
           
}
recursivefunction(5);

