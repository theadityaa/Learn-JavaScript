//  Control Flow statements
let a = 20
let b = 20
if (a > b) {
    console.log("a is greater then b")
} else if (a < b) {
    console.log("a is less then b");
} else {
    console.log("a is equal to b")
}

//--------------------------------

let time = 10;
let greeting;

if (time < 10) {
    greeting = "Good Morining"
    console.log(greeting)
} else if (time < 20) {
    greeting = "Good day"
    console.log(greeting)
} else {
    greeting = "Good Evening"
    console.log(greeting)
}

//  Task6️⃣✅

let password;   // this is undefined 

if (password === 8) {
    console.log("Welcome")
} else if (password <= 8) {
    console.log("Password is too short")
} else if (password >= 8) {
    console.log("Too Long Password" + "& Password should be 8 characters")
} else {
    console.log("Provide the password")
}

//  Switch Statement

let x = 1;
let bulb;

switch (x) {
    case 0:
        bulb = "Off"
        console.log(bulb)
        break;
    case 1:
        bulb = "On"
        console.log(bulb)
        break;
    default:
        console.log("value not Found")

}

// Task7️⃣✅

let fruit = "Banana"

switch (fruit) {
    case "Banana":
    console.log("Banana is good!")
    break;
    case "Orange":
    console.log("I'm not a fan of Orange")
    break;
    case "Apple":
    console.log("How you like them Apples?")
    break;
    default:
    console.log("i have never heart that these fruit")
}