// Objects - Collection Of Key-Value Pairs, (Key ==> string, Value ==> any data types );

// 1. Declaring Objects:
let studentDetail = {
    name : "Shahid Ali",
    age  : 25,
    rollNo : 370195,
    campus : "Governor House",
    isLoggedIn: true
};                   // TypeScript infered type of an objects
console.log(studentDetail);



// Defining type of an object
let studentDetails :{
    name : string,
    age  : number,
    rollNo: number,
    campus: string,
    isLoggedIn: boolean
} = {
    name : "Shahid Ali",
    age  : 25,
    rollNo : 370195,
    campus : "Governor House",
    isLoggedIn: true
};  
console.log(studentDetails);



// Advance Type 
type StudentDetail = {
    name : string,
    age  : number,
    rollNo:number,
    campus:string,
    isLoggedIn: true
}

let student : StudentDetail = {
    name : "Shahid Ali",
    age  : 25,
    rollNo : 370195,
    campus : "Governor House",
    isLoggedIn: true
};  
console.log(student);




// 2. Accessing Object Properties ( Using dot Notation . And Bracket []);
let studnt = {
    name : "Shahid Ali",
    age  : 25,
    rollNo : 370195,
    campus : "Governor House",
    isLoggedIn: true
};  
console.log(studnt.name, studnt.age, studnt.rollNo, studnt["campus"], studnt["isLoggedIn"]);




// 3. Adding Properties;
type AddPropertie = {
    name : string,
    age  : number,
    rollNo:number,
    campus:string,
    isLoggedIn: true,
    gender? : string   //  Optional Property
}


let addingPropertie : AddPropertie = {
    name : "Shahid Ali",
    age  : 25,
    rollNo : 370195,
    campus : "Governor House",
    isLoggedIn: true
};
console.log(addingPropertie);
addingPropertie.gender = "Male";
console.log(addingPropertie);




// 4. Modifying Properties;
let ModifyingProperty = {
    name : "Shahid Ali",
    age  : 25,
    rollNo : 370195,
    campus : "Governor House",
    isLoggedIn: true
};
console.log(ModifyingProperty);
ModifyingProperty.name = "Mazari";
ModifyingProperty["rollNo"] = 11111111;
console.log(ModifyingProperty);




// interface
interface Students {
    name : string,
    age  : number,
    rollNo: number,
    isLoggedIn : boolean,
    subject : (string  | number)[],
    country : string,
    city? : string
};

let student1 : Students = {
    name : "Shahid Ali",
    age  : 25,
    rollNo : 370195,
    isLoggedIn: true,
    subject : ["HTML", "CSS", "TYPESCRIPT", "PYTHON"],
    country : "Pakistan",
    city : "Karachi"
};

let student2 : Students = {
    name : "Dilbar Ali",
    age  : 24,
    rollNo : 24210,
    isLoggedIn: false,
    subject : ["JAVASCRIPT", "TAILWIND", "BOOTSTRAP", "KOTLIN"],
    country : "Pakistan"
};

let student3 : Students = {
    name : "SubhanAllah",
    age  : 22,
    rollNo : 89610,
    isLoggedIn: false,
    subject : ["REACT.JS", "NODE.JS", "MONGODB", "SWIFT"],
    country : "Pakistan"
};