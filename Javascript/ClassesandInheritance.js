// class Myclass{

//     //private variables

//     #a = 30;
//     #b = 34;
//     constructor(value1, value2){
//         this.a = value1;
//         this.b = value2;
//     }

//     get getData(){
//         return this.#a;
//     }

//     set setA(a){
//         this.#a = a;
//     }

//     set setB(b){
//         this.#b = b;
//     }
// }

// const obj1 = new Myclass(12,122);

// obj1.setA = 20;
// console.log(obj1.getData);

// // function Myclass(){
// //     this.a = 30;
// //     this.b = 20;
// // }

// const obj2 = new Date();
// console.log(obj2);

class Electronics {
  #input;
  #output;
  #name;

  constructor(input, output, name) {
    this.input = input;
    this.output = output;
    this.name = name;
  }

  print() {
    console.log(this.name);
    console.log(this.output);
    console.log(this.name);
  }
}

class Charger extends Electronics {
  #plugType;
  constructor(input, output, name, plugType) {
    super(input, output, name);
    this.#plugType = plugType;
  }
}

class harddisk extends Electronics {
  #RPM;
  constructor(input, output, name, rpm) {
    super(input, output, name);
    this.#RPM = rpm;
  }
}

// const hpcharger = new Charger(213,232,"Hp-charger", "European");

const wdharddisk = new harddisk(200, 250, "Hp Hard Disk" , 7200);

wdharddisk.print();
