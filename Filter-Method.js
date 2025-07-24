// The filter() method is a build-in array method in javascript
// that allows you to create a new array containing elements that pass
// a certain condition. It provides a clean and concise way to filter
// out elements from an array based on a specified criteria.
//-----------------------------------------------------------------
                // Filter Helper Method

const songs = [
    { name : "O Mere Dil Ke Chain", duration : 4.37},
    { name : "Dekha Ek Khwah-2", duration : 5.21},
    { name : "Neele Neele Ambar Par", duration : 5.20},
    { name : "Bheegi Bheegi Raaton Mein", duration : 3.54},
    { name : "Rimjhim Gire Sawan", duration : 3.15},
    
];
 
console.log(songs.filter((song) => song.duration > 4))
//------------------------------------------------------

const computers = [
    {ram: 4, hdd: 100},
    {ram: 8, hdd: 200},
    {ram: 16, hdd: 300},
    {ram: 32, hdd: 400},
]

console.log(computers.filter((com) => com.ram < 16));
//-------------------------------------------------------

    //Task28✅

// 1. Iterate over "ages" array
// 2. Print only adults, those whos age is greater then 18

const ages = [32, 33, 16, 40]

function checkAdults(age) {
    return age >= 18
}

const res = ages.filter(checkAdults);
console.log(res)
//---------------------------------------------------

    // Task29✅

// 1. Iterate Over "words" array
// 2. Print only those words which length is greater then 6

const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
]

// console.log(words.filter((word) => word.length > 6));
                    //OR

const results = words.filter((word) => word.length > 6)
console.log(results);