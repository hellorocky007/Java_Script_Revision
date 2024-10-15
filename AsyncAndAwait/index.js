const url = "https://catfact.ninja/fact";
const h1 = document.querySelector("h1");

// console.log("a");
// const  fetchData = async ()=>{
//     console.log("f1");
//     const response = await fetch(url);
//     console.log("f2");
//     const data = await response.json();
//     console.log("f3");
//     h1.innerText = data.fact;
//     console.log("f4");
// }
// fetchData().catch((e)=>{
//     console.log(e);
// })
// console.log("z");

// console.log("a");

// setTimeout(()=>{
//     console.log("timeout")
// },0);

// Promise.resolve().then(()=>console.log("Promise"));
// console.log("z");

// console.log("a");
// const  fetchData = async ()=>{
// try {
//     throw new Error("hello");

//     const response = await fetch(url);
//     const data = await response.json();
//     h1.innerText = data.fact;

   
// } catch (error) {
//     console.log(error.message);
// }
// finally{
//     console.log("Final One");
// }
    
// }
// fetchData();
// console.log("z")


const e = new Error("Hell");

e.name = "Hai";
console.log(e);