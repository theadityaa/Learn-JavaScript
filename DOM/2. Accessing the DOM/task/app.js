// 1. Select element h4 which holds text of "Red" by using getElementsByTagName
const h4 = document.getElementsByTagName("h4")
// console.log(h4);

// 2. Select div with the class of "green" which holds text (Green) by using getElementsByClassName
const green = document.getElementsByClassName("green")
// console.log(green);

// 3. Select div with the ID of blue which holds the text "Blue" by using getElementsById
const blue = document.getElementById("blue")
// console.log(blue);

// 4. Select div which has the class & Id of "yello" by using querySelector()
const yello = document.querySelector(".yellow")  
// console.log(yellow);  

// 5. Select all the elements which has the class of "teal" by using querySelectorAll
const allTeal = document.querySelectorAll(".teal")
console.log(allTeal);


//In JavaScript DOM manipulation, the dot (.) is used as a 
// selector for classes, while the hash symbol (#) is used 
// as a selector for IDs. This applies when using methods 
// like document.querySelector() or document.querySelectorAll().