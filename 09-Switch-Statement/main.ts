// Switch statement:
// A way to execute diffrent blocks of code based on the value of an expression.work as if_else statements


// 1. Example 

let num : number = 7;
switch (num) {
    case 1:
        console.log("Monday");
        break;
    
    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day");
        break;
};




// 2. Example

let num2 : number = 12;
switch (num2) {
    case 1:
        console.log("January");
        break;

    case 2:
        console.log("February");
        break;

    case 3:
        console.log("March");
        break;

    case 4:
        console.log("April");
        break;

    case 5:
        console.log("May");
        break;

    case 6:
        console.log("June");
        break;

    case 7:
        console.log("July");
        break;

    case 8:
        console.log("August");
        break;

    case 9:
        console.log("September");
        break;

    case 10:
        console.log("October");
        break;

    case 11:
        console.log("November");
        break;

    case 12:
        console.log("December");
        break;

    default:
        console.log("Invalid Month");
        break;
};




// 3. Example

let temprature : number = 30;
let DayToday : string;

switch (temprature) {
    case 50:
        DayToday = "Today Is Very Hot Day";
        break;

    case 40:
        DayToday = "Today Is Hot Day";
        break;

    case 30:
        DayToday = "Today Is Warm Day";
        break;

    case 20:
        DayToday = "Today Is Cool Day";
        break;

    case 10:
        DayToday = "Today Is Cold Day";
        break;

    default:
        DayToday = "Today Is Rainfall";
        break;

};
console.log(`${DayToday}`);




// 4. Example
let fruit : string = "Apple";

switch (fruit) {
    case "Apple":
        console.log("This is An Apple.");
        break;

    case "Banana":
        console.log("This is A Banana.");
        break;

    case "Mango":
        console.log("This is A Mango");
        break;

        case "Cherry":
            console.log("This is A Cherry");

    default:
        console.log("This is some other fruit.");
        break;
}