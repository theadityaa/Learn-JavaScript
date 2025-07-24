// JavaScript Get Date Methods
// get specific year, month, day, hour, minute, seconds, miliseconds.

const date = new Date()

const year = date.getFullYear() + 1
const month = date.getMonth()
const day = date.getDay()
const hour = date.getHours()
const minute = date.getMinutes()
const second = date.getSeconds()
const milliseconds = date.getMilliseconds()
const time = date.getTime()

console.log(`year: ${year}`);
console.log(`month: ${month}`);
console.log(`day: ${day}`);
console.log(`hour: ${hour}`);
console.log(`minute: ${minute}`);
console.log(`second: ${second}`);
console.log(`milliseconds: ${milliseconds}`);
console.log(`Time : ${time}`);

//--------------------------------------

const currentDate = new Date()
currentDate.setDate(currentDate.getDate() + 1)
console.log(currentDate)
currentDate.setDate(currentDate.getDate() - 1)
console.log(currentDate)