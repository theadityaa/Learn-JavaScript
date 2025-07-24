function add(x, y) {        // (x, y) --> Parameters
    return x + y;
}

const res1 = add(60, 40)    // (60, 40) --> Arguments 
const res2 = add(160, 40)
const res3 = add(60, 240)

console.log(res1);
console.log(res2);
console.log(res3);
// console.log(add(50, 50))

// -----------------------------------------------

//  Task 13✅
//  Multiply Function 

function myFunction(a, b) {
    return a * b
}
const m1 = myFunction(30, 20)
const m2 = myFunction(30, 30)
const m3 = myFunction(30, 40)

console.log(m1);
console.log(m2);
console.log(m3);

// ---------------------------------------------------
    // Function Declaration
    sayHi("Aditya")

    function sayHi(userName) {
        console.log(`Hello! ${userName}`)
    }
    

    // Function Expression

    const greetings = function (user) {
        console.log(`Namaste ${user}`)
    } 
    greetings("RAWAT Ji")