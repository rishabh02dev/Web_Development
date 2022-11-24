console.log("this is functions in jss");


function greet(name , greettext = "ram ram jee userr") {

  console.log(greettext + name )
  console.log(name + "good morning")
  
}

function sum(a,b,c){
    d = a + b + c;
    return d;
    // the functions didn't contiune to work after return statement
}
let greettext = "Rom ROm Jii";
let name = "rishabh";
let name1 = "sonia";
let name2 = "rohit";
let name3 = "preyaansh";
let name4 = "gurjar";

greet(name, greettext);
greet(name1, greettext);
greet(name2, greettext);
greet(name3, greettext);
greet(name4, greettext);

let returnval = sum(1,2,3);
console.log(returnval);




//this is an example which shows the importance of functions as it increases code reusability.
// console.log(name + "good morning");
// console.log(name1 + "good morning");
// console.log(name2 + "good morning");
// console.log(name3 + "good morning");
// console.log(name4 + "good morning");
