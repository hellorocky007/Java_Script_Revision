const input = document.getElementById("myInput");
const btn = document.getElementById("myBtn");
const delBtn = document.getElementById("deleteBtn");

// const btnClick=()=>{
//     sessionStorage.setItem("key1",input.value);
// };
// btn.addEventListener("click",btnClick);

// delBtn.addEventListener("click",()=>{
//     console.log(sessionStorage.clear());
// })
// //sessionStorage is object of array
// if(sessionStorage.getItem("key1")){
//     alert(sessionStorage.getItem("key1"));

// }

const btnClick=()=>{
    localStorage.setItem("key1",JSON.stringify({name:"Rocky",surname:"Singh"}));
};
btn.addEventListener("click",btnClick);

delBtn.addEventListener("click",()=>{
    console.log(localStorage.clear());
})
//sessionStorage is object of array
if(localStorage.getItem("key1")){
    console.log(JSON.parse(localStorage.getItem("key1")));

}