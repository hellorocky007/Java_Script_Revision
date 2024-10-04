const input = document.getElementById("numOfwords");
const container = document.querySelector(".container");


const generateWord = (n)=>{
    let text = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i=0;i<n;i++){
       text += letters[Math.round(Math.random()*(letters.length-1))];
    }
    
    
    return text;
}
let num ;
const generatePara =()=>{
    num = Number(input.value);
    const para = document.createElement("p");

    let data ="";
    for(let i=0;i<num;i++){
        const rn = (Math.random()*15).toFixed(0);
       data += generateWord(rn);
       data +=" ";
    }
    para.innerText = data;
    para.setAttribute("class","myPara")
    container.append(para);
};

