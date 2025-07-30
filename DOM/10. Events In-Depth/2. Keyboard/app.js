// https://www.w3schools.com/jsref/obj_keyboardevent.asp

const input = document.querySelector("input")

// input.addEventListener("keypress", () => {
//   console.log("Key Pressed");
// })

// input.addEventListener("keyup", () => {
//   console.log("Keyup");    // one key hold press count.
// })

// input.addEventListener("keydown", () => {
//   console.log("Keydown");
// })

// ------- USEFULL PROPERTIES AND METHODS -------

input.addEventListener("keypress", (e)  => {
  // console.log(e.charCode);
  // console.log(e.code);
  // console.log(e.ctrlKey);  // hit ctr + q
  // console.log(e.key);
  console.log(e.shiftKey);  // shift + t
})



