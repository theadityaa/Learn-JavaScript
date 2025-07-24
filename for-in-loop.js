// The"for ...in" loop in JavaScript is used to iterate over the
// enumerable properties of an object. It is a way to loop through the
// keys (property name) of an object.

// for (let key in object) {...}

//Iterate over object & log the property and the value of that object using for in loop.

let person = {
    name : "ADITYA",
    age : 28,
    gender : "male"
};

for (let keys in person) {
    console.log(keys, person[keys])
}
//---------------------------------------

let list = ["one", "two", "three", "four"];

for (let index in list) {
    console.log(`${index}: ${list[index]}`)
}
//----------------------------------------

    // Task 25✅

const object = { a:1, b:2, c:3};
for (let properties in object) {
    // console.log(keys, object[keys])
    console.log(`${properties} : ${object[properties]}`)
    
}