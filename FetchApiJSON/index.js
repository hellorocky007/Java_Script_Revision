
// const url = "https://catfact.ninja/fact";


// const  fetchData =()=>{
//     fetch(url).then((response)=>{
//         console.log(response);
//         return response.json();
//     }).then((data)=>{
//         console.log(data)
//     })
// }
// fetchData();

// console.log("z");

const url = "https://catfact.ninja/fact";
const h1 = document.querySelector("h1");

const  fetchData =()=>{
    fetch(url).then((response)=>{
        
        return response.json();
    }).then((data)=> h1.innerText = data.fact)
    .catch((e)=>{console.log(e)})
    .finally(()=> console.log("all Done"))
}
fetchData();

console.log("z");