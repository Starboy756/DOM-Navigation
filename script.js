//DOM Navigation Process of navigation of structure of HTML through JavaScript

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// -------------.firstElementChild---------------

// const element = document.getElementById("desserts");

// element.firstElementChild.style.backgroundColor = "yellow";

// const ulElements = document.querySelectorAll("ul"); //now its a nodelist and has built in forEach() method

// ulElements.forEach(ulElement => {

//     ulElement.firstElementChild.style.backgroundColor = "yellow" //will make the yellow bg color to all first children of ULs
// })

// -------------.lastElementChild---------------

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement => {

//      ulElement.lastElementChild.style.backgroundColor = "yellow" //will make the yellow bg color to all last children of ULs
// })

//------------ .nextElementSibling --------------

// const fruit = document.getElementById("Vegetables");

// fruit.nextElementSibling.style.backgroundColor = "yellow"

//------------ .previousElementSibling --------------

// const fruit = document.getElementById("desserts");

// const prevSib = fruit.previousElementSibling;

// prevSib.style.backgroundColor = "yellow"

//------------ .parentElement --------------

// const fruit = document.getElementById("IceCream"); //will get the childern ID and apply to whole parent element 

// const prevSib = fruit.parentElement;

// prevSib.style.backgroundColor = "yellow"

//------------ .children --------------

const element = document.getElementById("desserts"); //will get the childern ID and apply to whole parent element 

const children = element.children;

Array.from(children).forEach(element => {
    element.style.backgroundColor = "yellow"
})


