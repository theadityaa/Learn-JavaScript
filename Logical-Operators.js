// 1. --> Logical AND (&&)
//  -> TRUE if both the operands/boolean values are ture, else 
//     evaluates to FALSE.

const a = true;
const b = false;
const c = 4;

console.log(a && b);            // False
console.log(c > 2 && c < 2)     // False 

// 2. --> Logical OR (||)
//  -> TURE if either of the operands/boolean values is ture.
//     evaluates to false if both are false. 

console.log(a || b);
console.log(b || b)
console.log(c > 2 || c < 2)

// 3. --> Logical NOT (!)
//  -> True if the operands is false and vise-versa.

console.log(!a)
console.log(!b)

//---------------------------------------------------------

let Password = "Addi-WebDev"

if (Password.length >= 8 && Password.includes("Web")) {
    console.log("Valid Password.")
} else {
    console.log("Invalid Password.")
}

//-------------------------------------------

let isTrue = true;
console.log(!isTrue)

