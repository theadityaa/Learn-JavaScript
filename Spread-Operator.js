// The spread operator is a new addition to the set of operators in JavaScript ES6.
// It takes in an iterable (e.g an array) and expands it into individual elements.
// The spread operator is commonly used to make shallow copies of JS objects.
// Using this operator makes the code concise and enhances its readability.

function giveMe4 (a, b, c, d) {
    console.log("a:", a)
    console.log("b:", b)
    console.log("c:", c)
    console.log("d:", d)
}

const color = ["Red", "Orange", "SkyBlue", "Teal"]
giveMe4(...color)

//  Concat two Arrays 

const strNums = ["one","two","three"]
const moreStrNums = ["four","five","six"]

const concat = [...strNums, ...moreStrNums]
console.log(concat);
//-------------------------------------------

const peoples = ["Aditya","Rawat","From","INDIA"]
const allpeps = ["Shri", ...peoples, "(BHARAT)"]
console.log(allpeps);
//--------------------------------------
const obj1 = { x:1, y:2 }
const obj2 = { z:3 }
const obj3 = {...obj1,...obj2}
console.log(obj3)

//--------------------------------------

const Person = {
    name : "Adtiya",
    age : 28,
    Gender : "male"
}

const clone = {...Person, work : "Programmar", Location : "Remote"}
console.log(clone);
//----------------------------------------------------

//  Task 20✅

let arr1 = [1,2,3]
let arr2 = [4,5]
let arr3 = [...arr1, arr2]
console.log(arr3);

const user = {
    name : "Mr. Wick",
    age : 38
}

const clonedUser = {...user}
console.log(clonedUser);