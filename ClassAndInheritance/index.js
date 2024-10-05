// class Myclass{

//     constructor(value1,value2){
//         this.a = value1;
//         this.b = value2;
//         this.c ="Default";
//     }
//     print(){
//         console.log("I am printing");
//     }
// }

// // function Myclass(value1,value2){
// //     this.a = value1;
// //     this.b = value2;
// // }
// const obj = new Myclass(29,30);
// console.log(obj);
// obj.print();

// class Myclass{
//  #a= 30;
//  #b = 40;
//     constructor(value1,value2){
//        this.#a =value1;
//        this.#b = value2;
//     }
//     get getData(){
//         return this.#b;
//     }
//     set setData(num){
//         this.#a=num;
//     }
//     set setDataB(num){
//         this.#b=num;
//     }
//     print(){
//         console.log("I am printing",this.#a);
//     }
// }


// const obj = new Myclass(29,30);
// obj.setData = 50;
// obj.setDataB = 90;
// console.log(obj.getData);

// obj.print();


class Electronics{
 #input;
 #output;
 #name;
 constructor(input,output,name){
    this.#input = input;
    this.#output = output
    this.#name = name;
 }
 print(){
    console.log(this.#name);
    console.log(this.#input);
    console.log(this.#output);

 }
}
class Charger extends Electronics{
    #plugType;

    constructor(input,output,name,plugType){
        super(input,output,name);
        this.#plugType = plugType;
    }
}

// const charger = new Electronics(15,30,"Rocky");
// const hardisk = new Electronics(200,270,"Hp Hard Disk");
// charger.print();
// hardisk.print();

// const hpCharger = new Charger(1262,246,"Hp Charger","Indian");
// const dellCharger = new Charger(123,245,"dell Charger","Indian");
// const asusCharger = new Charger(1232,247,"asus Charger","Indian");
// const lenovoCharger = new Charger(121,2433,"lenovo Charger","Indian");
// hpCharger.print();
// dellCharger.print();
// asusCharger.print();
// lenovoCharger.print();

class Hardisk extends Electronics{
    #RPM;
    constructor(input,output,name,RPM){
        super(input,output,name);
        this.#RPM = RPM;
    }

    // print(){
    //     console.log(this.#RPM);
    // }

    get hardiskSpeed(){
        console.log(this.#RPM);
    }
}
const sandHardisk = new Hardisk(300,340,"Sandisk",7200);
sandHardisk.print();
sandHardisk.hardiskSpeed;
