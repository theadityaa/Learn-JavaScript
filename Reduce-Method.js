// The "reduce" method executes a reducer function for array element.
// The "reduce" method returns a single value: the function's accumulated result.
// The "reduce" method does not execute the function for empty array elements.
// The "reduce" method does not change the original array.

// array.reducer(function(total, currentValue, currentIndex, arr), initialValue)

// ------------------------------------

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((p,c) => {
    console.log(`Previous: ${p}`);
    console.log(`Current: ${c}`);
    return p + c;
    // reduce function will run for every item in the array, basically this is what's gonna happen.
    // 0 + 1 => 1
    // 1 + 2 => 3
    // 3 + 3 => 6
    // 6 + 4 => 10
    // 10 + 5 => 15
}, 0)
console.log(sum);
//--------------------------------------------------------------

const peoples = [
    {
        name : "Aditya Rawat",
        age : 28,
    },
    {
        name : "Shaktimaan",
        age : 40,
    },
    {
        name : "Nagraj",
        age : 38,
    },
];
// Ternary Operator
const oldestAge = peoples.reduce((p, c) => (c.age > p ? c.age : p), 0);
console.log(oldestAge);
// -----------------------------------------------

const words = [
    "apple",
    "banana",
    "orange",
    "banana",
    "apple",
    "orange",
    "apple",
    "grape",
]

const wordFrequency = words.reduce((frequencyMap, word) => {
    frequencyMap[word] = frequencyMap[word] || 0 + 1;
    return frequencyMap;
}, {})
console.log(wordFrequency);
// --------------------------------------------

        // Task32✅

function calculateProduct(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator * currentValue)
}

const numberss = [2, 3, 4, 5]
const product = calculateProduct(numberss)
console.log(product);