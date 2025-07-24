// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12]

// So here what's going on, each number in the numbers array is being passed
// --> Into anonymous function that we're passing in,
// --> Whatever this function returns is placed into a new array,
// --> After each elements has being processed that new array is return.
let double = numbers.map((num) => num * 2)
console.log(double)
// -----------------

// -----------------
let peoples = [
  { firstName: "john", lastName: "wick" },
  { firstName: "frank", lastName: "castle" },
  { firstName: "Brendan", lastName: "Eich" },
];

const results = peoples.map((person) => {
    return [person.firstName, person.lastName]
})

console.log(results)
// -----------------

    // Task 27✅

const logNumber = [11,22,33,44,55,66,77,88,99,100]
const multi = logNumber.map(num => num * 10)
console.log(multi);

        //or

const numm = [1,2,3,4,5]

function myFunction(num) {
    return num *10;
}
const newArr = numm.map(myFunction);
console.log(newArr);

