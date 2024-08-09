// Common Array Methods

// 1. length (number of elements in the array);
let studentsLength : string[] = ["Shahid", "Subhan", "Dilbar", "Adnan", "Ramzan"];
console.log(studentsLength.length) // as we have 4 elements in array




// 2. push() (Add an elements to the end of the array);
let pushMethod : string[] = ["Apple", "Banana", "Mango", "Cherry",];
console.log(pushMethod);
pushMethod.push("Strawberry", "Orange");
console.log(pushMethod);




// 3. pop() (Remove an elements to the end of the array);
let popMethod : string[] = ["Apple", "Banana", "Mango", "Cherry",];
console.log(popMethod);
popMethod.pop();
console.log(popMethod);




// 4. unshift() (Add an elements at the beginning of the array);
let unshiftMethod : string[] = ["Grandey", "Civic", "City",];
console.log(unshiftMethod);
unshiftMethod.unshift("Audi", "Revo");
console.log(unshiftMethod);




// 5. shift() (remove an elements at the beginning of the array);
let shiftMethod : string[] = ["Grandey", "Civic", "City","Audi", "Revo"];
console.log(shiftMethod);
shiftMethod.shift();
console.log(shiftMethod);




// 6. slice,  (Start, End, extract a section of the array and retruns a new array);
let sliceMethod : string[] = ["Ahmed", "Khalid", "Ramzan", "Shahid", "Dilbar"];
console.log(sliceMethod);
let extractArray = sliceMethod.slice(1, 4);
console.log(extractArray);



// 7. splice, Modify the orignal Array by removing exisiting elementand/or adding new elements at a specified index.
let spliceMethod : string[] = ["Karachi", "Lahore", "Quetta", "Islamabad", "Peshawar"];
console.log(spliceMethod);
spliceMethod.splice(1, 0, "Multan", "Sialkot");
console.log(spliceMethod);




// 8. indexOf, (element retruns the first index at which a given element can be found, or -1 if not found);
let indexMethod : string[] = ["Karachi", "Lahore", "Quetta", "Islamabad", "Peshawar"];
// index number                   0         1          2          3           4
console.log(indexMethod.indexOf("Peshawar"));




// 9. join (separator, Joins all array elements into a string, seprated by the specified separator);
let joinMethod : string[] = ["Shahid", "Subhan", "Dilbar", "Adnan", "Ramzan"];
console.log(joinMethod);
console.log(joinMethod.join(" , "));
// console.log(joinMethod.join("\n"));  //  for new line




// 10. concat(),  Merges Two Arrays and retrun a new array;
let concatMethod : string[] = ["Pakistan", "China", "Canada", "Dubai"];
let concatMethod2 : string[] = ["NewYork", "Sweden", "Spain", "Malaysia"];
console.log(concatMethod.concat(concatMethod2));

