// ----------- BAD WAY-----------
const secondBtn = document.querySelector(".second-btn")
secondBtn.onclick = function () {   // .onmousemove method can be used (event occcur when does mouse hover on/around that button)
  console.log("Dev ADITYA");
}

// ----------- GREAT WAY-----------
const best = document.querySelector(".best")

function greetings() {
  console.log("Namaste BHARAT");
}
best.addEventListener("click", greetings)

                     // OR

const best = document.querySelector(".best")
best.addEventListener("click",() => console.log("Developer"))

// ----------- Event (e) Object -----------
// It's an event object which contains information about perticular event.

const form = document.querySelector("form")
const input = document.querySelector("input")


form.addEventListener("submit",(e) => {         //e = event
  e.preventDefault()
  console.log(input.value);
})
