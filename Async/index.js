
function example(name="Rocky"){
    setTimeout(()=>{
        for(let i=0;i<100;i++)
          console.log(`${name}: ${i}`);
    },3000);
}

example();
alert("Last Line");
console.log("last Line");