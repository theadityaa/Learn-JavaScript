// When we provide function as an (argument) to other function that
// function is known as callback function.

function greet(name, cb) {
    console.log(`Hello ${name}`)
    cb()
}

function callBack() {
    console.log("I am CallBack Function")
}

greet("ADITYA", callBack)

//-------------------------------------------

//  Task 14✅

function showCallfn(fn) {
    const value = 10;
    fn(value)
} 

showCallfn (function(value){
    console.log(value);
})

