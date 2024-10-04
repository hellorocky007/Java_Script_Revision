let heading = document.getElementById("heading");
let myBtn = document.getElementById("myBtn");
let box = document.getElementById("box");
const input = document.querySelector("input");

myBtn.addEventListener("click",()=>{
   
    box.classList.add("boxStyle")
})
myBtn.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
    myBtn.style.backgroundColor="purple";
    box.removeEventListener("mouseover",func1);
})

function func1(){
    myBtn.style.transform = "scale(1.2)";
    heading.style.backgroundColor ='pink';
}


box.addEventListener("mouseover",func1)
box.addEventListener("mouseleave",()=>{
    myBtn.style.transform="";
})


// window.addEventListener()
// addEventListener("contextmenu",(e)=>{
//     e.preventDefault();
//     // myBtn.style.filter = "blur(10px)";

// })

// addEventListener("click",(e)=>{
//     console.log(e.clientX);
//     console.log(e.clientY);
// })

box.addEventListener("dblclick",()=>{
    document.body.style.backgroundColor = "rgb(50,50,50)";
})
box.addEventListener("click",()=>{
    document.body.style.backgroundColor = "";
})
input.addEventListener("change",(e)=>{
    
    console.log(e.target.value);
})
