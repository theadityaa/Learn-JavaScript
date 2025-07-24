// The find() method is another built-in array helper in 
// JavaScript that allows you to find the first element in an array that matches 
// a specific condition. It returns the value of the first element 
// that satisfies the given testing function, or undefined if no 
// element is found.

// ------------------------------

const peoples =  [
    {name : "ADITYA", age: 28},
    {name : "john", age: 38},
    {name : "jason", age: 42},
    {name : "Punisher", age: 48},
    {name : "john", age: 55},
]

const res = peoples.find((person) => person.name === "jason")
console.log(res);
//------------------------------------------------------------

const posts = [
    {id: 1, content: "Good Post"},
    {id: 2, content: "Funny Post"},
    {id: 3, content: "Sad Post"},
    {id: 4, content: "Good Post"},

]

const postRes = posts.find((post) => post.content === "Good Post")
console.log(postRes);
//----------------------------------------------------

        // Task 30✅
// 1. Iterate over "ages" array
// 2, Print only those ages which is greater then 18

const ages = [3, 10, 18, 20];

function checkAge(age) {
    return age > 18
}

const result = ages.find(checkAge)
console.log(result);
            // OR
console.log(ages.find(checkAge));

//-----------------------------------------------
        // Task 31✅

// BONUS => REFACTOR
// this is ES5 code
// let products = [
//   { name: "Checkers", category: "Toys" },
//   { name: "Harry Potter", category: "Books" },
//   { name: "iPhone", category: "Electronics" },
//   { name: "Learn PHP", category: "Books" },
// ];
// let product;

// for (let i = 0; i < products.length; i++) {
//   if (products[i].category === "Books") {
//     product = products[i];
//     break;
//   }
// }
// console.log(product);

// converting to ES6 
let products = [
  { name: "Checkers", category: "Toys" },
  { name: "Harry Potter", category: "Books" },
  { name: "iPhone", category: "Electronics" },
  { name: "Learn PHP", category: "Books" },
];

const product = products.find((product) => product.category === "Books")
console.log(product);
// ---------------------------------------------------------------------