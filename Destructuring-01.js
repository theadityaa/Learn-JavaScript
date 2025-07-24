//Destructuring allows us to "unpack" values from
//data-structures (Arrays, objects) into separate distinct variables.

//  Destructuring Arrays
const foo = ["one", "two", "three", "four"]

const [Red,one,four] = foo;
console.log(Red,four)

//-------------------------------------------

// let a,b;
// [a = 4, b = 5] = ["one","two"]
// console.log(a);

//--------------------------------------------

function f() {
    return [1,2]
}
let aa,bb;
[aa,bb] =  f()
console.log(aa);
console.log(bb);

//------------------------------------------

function fn() {
    return [1,2,3]
}
let x,y
[x, , y] = fn()
console.log(x)
console.log(y)

//--------------------------------------------

// Assigning rest operator of an Array to a variable.

const [i, ...j] = ['one','two','three', 10, 99, true, ["one"]]
console.log(j)

//--------------------------------------------

//      Task21✅

const colors = ["Red", "Orange","Blue","Green", "Black","White","Yellow"]

const [color1, color2, color3] = colors
console.log(color1, color2, color3);
//---------------------------------------------------

//  Desetructuring Objects 

const student = { fname : "Aditya", position : "First", rollnumber : 47}
const {fname, position, rollnumber} = student
console.log(fname, position, rollnumber)

//  Task 22✅

const person = {
    name : "Aditya",
    age : 28,
    country : "BHARAT"
}
const {name,age,country} = person
console.log(name);
console.log(age);
console.log(country);
//-------------------------------------------

const num = {x: 100, y: 200}
const {x:new1, y: new2} = num
console.log(new1)
console.log(new2)

//-------------------------------------------

// Object destructuring and rest operator.
let {a,b,...rest} = {a:100, b:200, c:300, d:400, e:500}
// console.log(a)
// console.log(b)
console.log(rest)
//-------------------------------------------
//  Task 23✅

const perSon = {
    name : "SHaktiMaan",
    age : 31,
    country : "India" 
}
const {name: personName, age: personAge, country: personCountry} = perSon
console.log(personName);
console.log(personAge);
console.log(personCountry);
//----------------------------------------------------

const persOn = {
    name : "SHaktiMaan",
    age : 31,
    country : "BHARAT" 
}

function printPersonInfo({name, age, country}) {
    console.log(`name: ${name}`);
    console.log(`age: ${age}`);
    console.log(`country: ${country}`);
}
printPersonInfo(persOn)   
//------------------------------------------------

let options = {
    title : "My Menu",
    items : ["item-1", "item-2"],
}

function showMenu({
    title = "Untitled",     // 'Untitled' is default value.
    width : w = 100,
    hight : h = 200,
    items : [item1, item2],
}) {
    console.log(`${title}, ${w}, ${h}`)
    console.log(item1)
    console.log(item2)
}
showMenu(options)