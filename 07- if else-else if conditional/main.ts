// if statements: 

// allow your TypeScript code to make decisions based on conditions.
// depending on whether a certain condition is true or false.

let temprature : number = 45;
if(temprature === 45) {
    console.log("Today is very hot day");

}else {
    console.log("Today is cool day");
}
// Output: Today is very hot day




// Else if for multiple conditions
// if you have more than two conditions, you can chain `else if` statements:

let grade : number = 85;
if(grade >= 90) {
    console.log("Congratulations You got A grade");

}else if (grade >= 80) {
    console.log("Congratulations You got B grade");

}else if (grade >= 70) {
    console.log("Congratulations You got C grade");

}else if (grade >= 60) {
    console.log("Congratulations You got D grade");

}else if (grade >= 50) {
    console.log("Congratulations You got E grade");

}else {
    console.log("Sorry You Are Failed");
}




// Nested if-else statment

let person : string = "Young";
let personAge : number = 25;

if (person === "Young") {

    if (personAge === 30) {

        console.log("person is 30 year old");

    }else if (personAge < 30) {

        console.log("person age is less than 30 ");
    }else{

        console.log(`person age is above 30`);
    }
}else {

    console.log(`person age is not young`);
}