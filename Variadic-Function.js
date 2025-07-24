// The rest parameter syntax allows a function to
//accept an indefinite number of arguments
// as an array, providing a way to represent variadic functions in JavaScript.

function user(x, ...userData) {
    console.log(x)
    console.log(userData)
}

user("Aditya", 28, "Programmer", "Cricket")
//-------------------------------------------

function person (firstName, lastName, ...hobbies) {
    console.log("FirstName :", firstName)
    console.log("lastName :", lastName)
    console.log("Hobbies :", hobbies);
}
person("Aditya", "Rawat", "Programming", "Cricket", "Riding-Bike")
//------------------------------------------

//Create a function which will take unlimited amount
//of parameters & log all of that parameters to the console.

function variadic (...params) {
    console.log(params);
}

console.log("Aditya", "Rawat", 28, 19, ["one"],);
