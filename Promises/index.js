


// const a = new Promise((resolve,reject)=>{

//     let success = false;
//     if(success){
//        resolve("Promise Fullfilled");
//     }else{
//      reject("Some Techincal Error");
//     }   
//  })

// a.then((parameter)=>{
//         // console.log(parameter);
       
// },(error)=>{
//     console.log(error);
// })

// a.then((parameter)=>{
//     console.log(parameter);
   
// }).catch((error)=>{
//      console.log(error);
// })

const arr = [];
const fetchData=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            arr.push({
                name:"jay"
            });
            if(arr.length>0){
                resolve("Data feteched");
            }else{
                reject("Some Technical Error");
            }
        },2000);
    })
}

fetchData(arr)
.then((paramter)=>console.log(paramter))
.catch((paramter)=> console.log(paramter))
.finally(()=>console.log("Will work Either way"))