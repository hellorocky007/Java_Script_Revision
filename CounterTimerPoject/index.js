const daysElement = document.querySelector(".days");
const minuteElement = document.querySelector(".minutes");
const hourElement = document.querySelector(".hours");
const secondElement = document.querySelector(".seconds");
const heading = document.querySelector("h1");
const counterTimer = document.querySelector(".counterTimer");

const second = 1000,minute = 60*second,
hour = 60*minute,
day = 24*hour;

const timerFunction = () =>{
    let now = new Date();
    let dd = String(now.getDate()).padStart(2,"0");
    let mm = String(now.getMonth()+1).padStart(2,"0");
    let yyyy = now.getFullYear();
    const enterDay = prompt("Enter Day").padStart(2,"0");
    const enterMonth = prompt("Enter Month").padStart(2,"0");
    if (parseInt(enterDay, 10) > 31 || parseInt(enterDay, 10) < 1 || parseInt(enterMonth,10)>12 || parseInt(enterMonth,10)<1) {
        alert("Please Enter Valid Date and Month");
        return;
    }    
    let targetDate = `${enterMonth}/${enterDay}/${yyyy}`;
    now = `${mm}/${dd}/${yyyy}`;

    if(now>targetDate){
        targetDate = `${enterMonth}/${enterDay}/${yyyy+1}` ;
    }
    

const intervalId = setInterval(()=>{
    const timer = new Date(targetDate).getTime();
const today = new Date().getTime();

const diff =  timer - today;
const leftDay = Math.floor(diff/day) ;
const leftHours = Math.floor((diff%day)/hour) ;
const leftMinute = Math.floor((diff%hour)/minute);
const leftSecond = Math.floor((diff%minute)/second) ;
daysElement.innerText = leftDay;
hourElement.innerText = leftHours;
minuteElement.innerText = leftMinute;
secondElement.innerText = leftSecond;

if(diff<0){
    counterTimer.style.display = "none";
    heading.innerText = "Time's Over";
    clearInterval(intervalId);
    
}

},0)
}
timerFunction();