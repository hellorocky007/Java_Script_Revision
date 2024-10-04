// console.log(document.body);
// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.childNodes);
// console.log(document.body.children);
// const arr = document.body.children;
// console.log(arr.length);
// const newArr = Array.from(arr);
// console.log(newArr);

// for(let i=0;i<newArr.length;i++){
//     console.log(newArr[i]);
// }



// console.log(document.getElementById("thisOne").innerHTML="Rocky");
// const thisOne = document.getElementsByClassName("doing");
// console.log(thisOne);
// console.log(document.getElementsByClassName("doing")[0].innerHTML="Singh");

// const thisOne = document.getElementsByName("email");
// console.log(thisOne[0])

// const thisOne = document.getElementsByTagName("span");
// console.log(thisOne[0]);
// thisOne[0].style.color="Pink";
// thisOne[0].innerText = "Jay Singh";
// thisOne[0].innerHTML = `<span class="myClass" >Jay Bardhan Singh</span>`

const myBtn = document.getElementById("myBtn2");

myBtn.style.backgroundColor ="Green"
myBtn.style.padding = "10px 20px";
myBtn.innerText="submit";
myBtn.style.border="none";
myBtn.style.color="#ffff";
myBtn.style.borderRadius="5px";

const btn = document.querySelector(".do");
btn.innerText = "none";

//Attributes

// console.log(myBtn.getAttribute("class"));
// console.log(myBtn.setAttribute("class","ThisIsBtn"));

// const h2 = document.createElement("h2");
// document.body.append(h2);
// h2.innerText = "Hello";

// document.body.prepend(h2);

function bringHead(){
    const h2 = document.createElement("h2");
// const myText = document.createTextNode("hello Mr Bee");
h2.innerText="Hello Welcome";
document.body.prepend(h2);
}

const btns =document.querySelectorAll("button");
btns[1].onclick=deleteHeading;

function deleteHeading(){
    const h2 = document.querySelector("h2");
    h2.remove();
}

