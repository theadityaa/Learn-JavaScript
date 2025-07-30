// ------------------------------------
// createElement()
// appendChild()
// append()
// prepend()
// insertBefore(what,where)

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

// removeChild()
// remove()
// ------------------------------------

// ------------------------------------
// Creating Element
// const h1 = document.createElement("h1")
// const body = document.body
// h1.textContent = "Hello World"
// console.log(h1.textContent);

// h1.classList.add("greeting")
// body.appendChild(h1)
// console.log(h1);



// const body = document.body;

// // Adding Text
// h1.textContent = "Hello World";


// // Attaching element to the body
// body.appendChild(h1);
// ------------------------------------

// const ul = document.querySelector("ul")
// const newLi = document.createElement("li")
// newLi.innerText = "I'm Li tag"
// ul.appendChild(newLi)

// const firstLi = document.querySelector("li")
//     //selector.insertBefore(what,where)
// ul.insertBefore(newLi, firstLi)


// ------------------------------------

// ------------ appendChild() ------------
// const newLi = document.createElement("li");
// newLi.innerText = "I'm li tag";
// ul.appendChild(newLi);

// ------------ insertBefore(what, where) ------------
// const firstLi = document.querySelector("li");
// ul.insertBefore(newLi, firstLi);
//---------------------------------------------------
// const firstP = document.querySelector("p")
// const i = document.createElement("i")
// i.innerText = "I'm italics"
// i.style.color = "skyblue"

// firstP.insertAdjacentElement("beforebegin",i)
// firstP.insertAdjacentElement("afterbegin",i)
// firstP.insertAdjacentElement("beforeend",i)
// firstP.insertAdjacentElement("afterend",i)

// ------------ insertAdjacentElement(where, what) ------------
// const firstP = document.querySelector("p");
// const i = document.createElement("i");
// i.innerText = "I'm italics";
// i.style.color = "skyblue";
// firstP.insertAdjacentElement("beforebegin", i);
// firstP.insertAdjacentElement("afterbegin", i);
// firstP.insertAdjacentElement("beforeend", i);
// firstP.insertAdjacentElement("afterend", i);
//---------------------------------------------

// let section = document.querySelector("section")
// const i = document.createElement("i")
// i.innerText = "I'm italics"
// i.style.color = "skyblue"
// const span = document.createElement("span")
// span.innerText = "ADITYA"
// span.style.color = "crimson"

// section.append(span, i)
// section.prepend(span, i)

// ------------------ Append() ------------------
// In append method you can pass more then one element
// let section = document.querySelector("section");
// section.append(i, firstLi);
//-----------------------------------------------


// ----------- Prepend() -----------
// You can still pass multiple elements if you want to, but it will push it at the top.
// let newList = document.querySelector(".new-list")
// let a = document.createElement("a")
// a.textContent = "ADITY RAWAT"
// a.href = "https://www.linkedin.com/in/adityarawat1/"
// newList.prepend(a)

// ----------- removeChild() -----------
// newList.removeChild(a);
// newList.remove();


// const newList = document.querySelector(".new-list")
// const fourth = document.querySelector(".fourth")
// newList.removeChild(fourth)
// newList.remove()        // and BOOm