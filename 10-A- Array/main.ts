// Array:
// Arrays Are Collections Of Elements That Can Hold Various Data Types

// Two Ways To Declare Array

// 1. Using Square Brackets

let fruits : string [] = ["Apple", "Banana", "Orange", "Cherry", "Mango"];
// Index number              0        1         2          3        4
console.log(fruits);



let num : number [] = [11, 22, 33, 44, 55];
console.log(num);




// 2. Using The Generic

let myFriends : Array <string | number> = ["Shahid", 12, "Subhan", "Dilbar",];
console.log(myFriends);



let myFriendsMarks : Array <number | boolean | string> = [true, 11, 22, 33, 44, "Shahid"];
console.log(myFriendsMarks);




// 3. Type Infrence

let colors = ["Red", "Green", "Blue"];  // Infrred as string 

let myFriend = ["Shahid", 12, "Subhan", "Dilbar",];   // Infrred as string 
myFriend = ["Ahmed"];  // OK
myFriend = [55];  // OK
// myFriend = [true];  // Error, type boolean is not assignable to type (string | number);



// 4. Accessing Array Element

let myfruits : string [] = ["Apple", "Banana", "Orange", "Cherry", "Mango"];
// Index number                0        1         2          3        4
console.log(myfruits[0]);  // Apple
console.log(myfruits[1]);  // Banana
console.log(myfruits[2]);  // Orange
console.log(myfruits[3]);  // Cherry
console.log(myfruits[4]);  // Mango
console.log(myfruits[0], myfruits[1], myfruits[2], myfruits[3], myfruits[4]);