// The ternary operator in JavaScript is a concise way of writing 
// conditional expressions. It is the only JavaScript operator that 
// takes three operands: a condition followed by a question mark (?),
//  an expression to execute if the condition is true, followed by a 
// colon (:), and an expression to execute if the condition is false.

// condition ? exprIfTrue : exprIfFalse;

let password =  8;
function passwordChecker(ps) {
    return ps === 8 ? `Strong Password` : "Password must be 8 charcters"
}

const res = passwordChecker(9)   // you can also pass diffrent value in passwrodChecker->(2)<- here. 
console.log(res)
//-----------------------------------------------------

const age = 28;
const isAdult = age >= 18 ? `Adult` : "Not Adult"
console.log(isAdult)

//---------------------------------------------------

        // Task 24✅

const money = true
const person = money >= true ? "buy products" : "Bring some money!"
console.log(person)

// Create a program which checks if number is positive, negative or zero.

let a = -2
let resl = a >= 0 ? (a === 0 ? "zero" : "positive") : "negative"
console.log(resl)


