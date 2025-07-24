 // setTimeout Function
 setTimeout (function () {
    console.log(`This function will be executed after 3 seconds & END`)
    },3000 )
//-------------------------------------------


const intervalId = setInterval(function () {
    console.log(`This function is executed at the interval`);
}, 1000);

setTimeout (function () {
    clearInterval(intervalId)       // clearInterval is Method
    console.log(`Interval Stopped`);
}, 10000) 