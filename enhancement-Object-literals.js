//  Enhanced Object Literals

// function user(name, age, work) {
//     return {
//         name : name,
//         age : age,
//         work : work,
//     };
// }
// const Aditya = user("ADITYA", 27, "Programmer")
// const friend = user("NoOne", 0, "notExist")
// console.log(Aditya)
// console.log(friend)

//----------------------------------------

function user(name, age, work) {
    return {
        name,
        age,
        work,
        intro : () => {
            console.log(`Hello! My name is ${name}. my age is ${age} & I work as ${work}`)
        },
    };
}
const Aditya = user("ADITYA", 27, "Programmer")
// const friend = user("NoOne", 0, "notExist")
console.log(Aditya.intro())
// console.log(friend)

//------------------------------------------

//  Task 16✅
const a = 1
const b = 2
const c = 3

const obj = {a, b, c}
console.log(obj)
//-----------------------------------

//  Task 17✅
// inside a function we are make object which are performing arthimatic operations.
const lib = {
    sum : (a,b) => a + b,
    mult : (a,b) => a * b,
}

console.log(lib.sum(5,2));
console.log(lib.mult(5,2));
//--------------------------------------------

//  Task 18✅

function getPersionES6 (name, age, height) {
    return {name, age, height}
}

const output = getPersionES6("ADITYA", 27, 200)
console.log(output);
