//  Arrow Function 

// function greet(Username) {
//     return `Hello! ${Username}`
// }
// console.log(greet("ADITYA"))

//------------------------------------------

authentication = OTP => {
    return `This is your OTP : ${OTP}`
} 
console.log(authentication(2255))

//-------------------------------------------

//  more precise using arrow function 
const greet = Username => `Hello ${Username}` // if there is multiply parameter, you have to use parenthesis.
console.log(greet("Aditya"))

//-------------------------------------------

// double the number using arrow function 
const double = n => n * 2
console.log(double(5))

// Task 15✅     REFACTOR THIS CODE TO ES6 ARROW FUNCTIONS.

setTimeout(() => {
  console.log("Hello");
  setTimeout(() =>{
    console.log("My");
    setTimeout(() =>{
      console.log("Name");
      setTimeout(() =>{
        console.log("is");
        setTimeout(() =>{
          console.log("ADITYA");
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);



