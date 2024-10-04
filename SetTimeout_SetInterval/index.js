// const btn = document.querySelector("button");
// const printName = (name,income,gender)=>{
//     console.log(`Welcome, ${name},Your income is ${income} and You are ${gender}.`);
// };

// const id = setTimeout(printName,2000,"Jay",2000,"Male");

// btn.addEventListener("click",()=>{
//     clearTimeout(id);
// })

const btn = document.querySelector("button");
const printName = (name,income,gender)=>{
    console.log(`Welcome, ${name},Your income is ${income} and You are ${gender}.`);
};

const id = setInterval(printName,2000,"Jay",2000,"Male");

btn.addEventListener("click",()=>{
    clearInterval(id);
})