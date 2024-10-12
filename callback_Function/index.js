

// function sum(a,b,callback){
//     const result = a+b;
//    callback(result);
// }

// function displaySum(result){
//     const h1 = document.querySelector("h1");
//     h1.innerText = result;
// }
//  sum(30,30,displaySum);
//  sum(70,40,alert)

// const arr =[1,2,3,4,5,6];
// function calculator(arr = [],callback){
//     const ans = [];
//     for(let i=0;i<arr.length;i++){
//         //const element = callback(arr[i]*10)
//         ans.push(callback(arr[i]));
//     }

//     console.log(ans);
// }

// function divide(a){
//     return a/10;
// }
// calculator(arr,(a)=> a*10);
// calculator(arr,divide);

const gameList = [];
const game = [];

const fetchData = (callback) => {
    setTimeout((callback)=>{
        gameList.push(
            {
                name:"Jay",
                age:"23"
            },
            {
                name:"Rocky",
                age:"25"
            },
            {
                name:"Dhiraj",
                age:"26"
            }
        );
        console.log("Console log after fetching");
        setTimeout(()=>{
            game.age = "342";
            game.name = "hello";
            callback();
        },2000, callback);
       
        console.log(gameList);
    },3000,
    callback)

};



const displayGame = ()=>{
    setTimeout(()=>{
        for(let i=0;i<gameList.length;i++){
        const p = document.createElement("p");
        p.innerText = gameList[i].name;
        document.body.append(p);
        }
    },1000)
}

fetchData(displayGame);