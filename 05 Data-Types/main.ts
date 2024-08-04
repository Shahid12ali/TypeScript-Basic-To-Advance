// Data types in typescript

// 1. string: (textual data in single, quotes ,' ',  double, quotes, ," ", or backticks, ` `, );

// In this example, you understand how to write the string data type. 
// Whatever you write between single quotes, double quotes, or backticks will be called a string.

let myName : string = 'Shahid Ali';     //  Single quotes
let myNumb : string = '12345';          //  Single quotes

let my_Name : string = "Shahid Ali";    //  Double quotes
let my_numb : string = "123456789";     //  Double quotes

let myname : string = `Shahid Ali`;     // backticks  
let mynum : string = `987654321`;       // backticks  



// 2. Number: (Numeric Values);

let myNumer : number = 123456789;
let my_Numer : number = 0.5;



// 3. boolean: (logical Value either true or false);

let IsMyAgeAbove25 : boolean = true;
let IsMyAgeAbove90 : boolean = false;



// 4. null: (explicity indicate no value);

let empty : null = null;



// 5. undefined: (haven't been assigned yet a value);

let myValue : undefined;



// 6. uknown: (it bypasses type check);

let my_name : unknown = "Shahid Ali";
my_name = 123456;
my_name = true;



// 7. any: (it also bypasses type check, not recommended to use any);

let my_name1 : any = "Shahid Ali";
my_name1 = 123456;
my_name1 = true;



// 8. void: (absence of retrun value from a function);
