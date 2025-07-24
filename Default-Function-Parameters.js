function countTo5 (count = false) {     //give default value in function () 
    if(count === true) {
        for(i = 1; i <= 5; i++) {
            console.log(`Count: ${i}`)
        }
    }
}
countTo5(true)      // if you give value here, GAME CHANGES.
//----------------------------------------------------------------------

function rating (rate) {
    if( rate === 5) {
        console.log(`Hight rating :)`)
    } else if ( rate === 0) {
        console.log(`Poor rating :(`)
    }
}
rating(5)
//--------------------------------------------------------------------

//  Task 19✅
function multiply( a, b = 1) {
    return a * b;
}
console.log(multiply(5, 4))