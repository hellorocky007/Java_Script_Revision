const clock = document.querySelector(".clock");

let second = 0,min=0,hr=0;
let intervalId;


const startWatch = ()=>{
   intervalId = setInterval(()=>{
    if(second<59){
        second++;
    }else if(min>=59){
        hr++;
        min=0;
    }
    else{
        second = 0;
        min++;
    }
        clock.innerText = `${String(hr).padStart(2,"0")}:${String(min).padStart(2,"0")}:${String(second).padStart(2,"0")}`;
    },1000);
}
const stopWatch =()=>{
 clearInterval(intervalId);
}