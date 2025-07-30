// ************ DOM SELECTORS ************
// 1. getElementsByTagName      //Selects all elements with a specified HTML tag name, returning an HTMLCollection.
// console.log(document.getElementsByTagName("h1"));
// console.log(document.getElementsByTagName("h1").length);

// 2. getElementById        //Selects a single element by its unique id attribute.
// console.dir(document.getElementById("id-1"));
// console.dir(document.getElementById("main"));

// 3. getElementsByClassName       //Selects all elements with a specified CSS class name, returning an HTMLCollection.
// console.log(document.getElementsByClassName("cls"))
// console.log(document.getElementsByClassName("cls-1"))

// 4. querySelector     //Selects the first element that matches a specified CSS selector.
// console.log(document.querySelector("h1"))
// console.log(document.querySelector(".cls"))
// console.log(document.querySelector("Aditya"))    // Output : null
// console.log(document.querySelector("#id-1"))    
// console.log(document.querySelector("li"))    

// 5. querySelectorAll  //Selects all elements that match a specified CSS selector, returning a NodeList.
// console.log(document.querySelectorAll(".cls"));
// console.log(document.querySelectorAll("li").length);
// ---------------------------------------
// Storing data in variables
const h1 = document.querySelectorAll("li")
console.log(h1);