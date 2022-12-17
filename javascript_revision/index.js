//1.ways to print in javascript 
console.log("hello world");
document.write("this is document write in javascript.");
//2. Javascript Console API

console.warn("this is a warning");
console.error("this is an error");

//3. Javascript Variables
// what are varaibles? -- // Containers to store data variables
var number1 = 34;
var number2 = 56;
console.log(number1 + number2);

//4. Data types in javascript

//strings
var str1 = "This is a string";
var str2 = 'This is also a stirng';
//Numbers
var num1 = 455;
var num2 = 56.76;
//Objects
var marks = {
    ravi:34 ,
    rishabh : 45,
    shubham : 67,
    rishuu : 00,

}
// console.log(marks);
//Booleans
var a = true;
var b = false;
// console.log(a);
// console.log(b);

//undefined
var und = undefined;
// console.log(und);
var rishabh ;

//Null
var n = null;
// console.log(n);

// At a very high level, there are two types of datatypes in javascript
// 1.Primitive data types: undefined, null , number , string , Boolean , Symbol
// 2.Refernce data types: arrays and objects


var arr =  [1,2,"rishbah",3,4,5];
// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr);

//Operators in javascript;
var a = 34;
var b = 26;
// console.log("The value of a+b is " , a+b);
// console.log("The value of a -b is ", a-b);
// console.log("The value of a * b is ", a*b);
// console.log("The value of a / b is ", a/b);

//Assignment operators

var c = b;
c += 4;
// console.log(c);

var x = 34;
var y = 34;
// console.log(x == y);

//logical operators
// //using logical and along with logical or
// console.log( true && true);
// console.log(false || true);

//logical not
// console.log(!true);


//functions in javascript

//Dry = Donot repeat yourself
function avg(a,b){
    c = (a+b)/2;
    return c;
}

c = avg(10,10)
// console.log(c);

//conditionals in javascript

//if else statement
// var age = 4;
// if(age>18){
//     console.log("YOu can drink wine");
// }
// else{
//     console.log("you can't  drink wine");
// }
// //if-else ladder
// if(age>32){
//     console.log("Your are not a kid");
// }
// else if(age>26){
//     console.log("lele ram ram");
// }
// else{
//     console.log("Yes betaa");
// }
// console.log("End of ladder");

// var arr = [1,2,3,4,5,6,7];
// // console.log(arr);
// for(var i = 0; i<arr.length ; i++){
//     if(i==2){
//         break;
//     }
//     console.log(arr[i])
// }

// arr.forEach(function(element){
//     console.log(element);
// }) 


//this is used to make the particular variable so that it cna't be changed even by mistake.
const ac = 0;
// ac = a+1;
//while loop
let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do{
// console.log(arr[j])
//     j++;
// }while(j<arr.length);

let myArr = ["fan" , "Camera" , 34 , null , true];

//Array Methods
// console.log(myArr.length);
// myArr.pop();
// console.log(myArr);
// myArr.push("rishabh shukla");
// console.log(myArr);
// myArr.shift()
// console.log(myArr);
// //unshift is used to add the element at 0th index
// myArr.sort();
// console.log(myArr);



// string methods in javascript 

let myLovelyString = "Rishabh shukla is a good boy";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("rishabh"));
// console.log(myLovelyString.indexOf("good"));
// console.log(myLovelyString.lastIndexOf("boy"));


// console.log(myLovelyString.slice(0,3))

d = myLovelyString.replace("Rishabh" , "Tangocharlie");
// console.log(d);
// console.log(myLovelyString);

let mydate = new Date();

// console.log(mydate);
// console.log(mydate.getFullYear());
// console.log(mydate.getMinutes());



// DOM Manipulation

let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName('container');
console.log(elemClass);
elemClass[0].style.background = "yellow";

elemClass[0].classList.add("bg-primary");

// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elemClass[0].innerHTML);
// console.log(elemClass.innerText);

// tn = document.getElementsByTagName('div');
// console.log(tn);
// createdElement = document.createElement('p');
// createdElement.innerText = "This is a created para";
// tn[0].appendchild(createdElement);
// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is a created bold element";
// tn[0].replaceChild(createdElement2, createdElement)

// removechild(element); --->removes an element


//Selecting using query

sel = document.querySelector('.container')
console.log(sel)

sel = document.querySelectorAll('.container')
console.log(sel)

// function clicked(){
//     console.log("the button was clicked.")
// }

// window.onload = function(){
//     console.log("the document was loaded")
// }


//Events in Javascript.
// firstcontainer.addEventListener('click' , function(){
//     document.querySelectorAll('.container')[1].innerHTML = <b>We have clicked.</b>
//     console.log("clicked on container.")
// }
// )

// firstcontainer.addEventListener('mouseover' , function(){
//     console.log("Mouse on container.")
// }
// )
// firstcontainer.addEventListener('mouseout', function(){
//     console.log("Mouse out container.")
// })
// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstcontainer.addEventListener('mouseup' , function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;

//     console.log("Mouseup when clicked on container.")
// } )

// firstcontainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML= "<b> We have clicked.</b>" 
//     console.log("Mousedown when clicked on container")
// })

//Arrow functions
summ = (a,b)=>{
    return a+b;
}


logkaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML= "<b> We have clicked.</b>" 
    console.log("I am your log")
}
//SetATimeout and setinterval

// setTimeout(logkaro, 2000)

//setinterval is used to do things repeadtelly

clr = setInterval(logkaro, 5000)

// use clearInterval/clearTimeout to cancel setinterval/setTimeout



//local storage in javascript.


// localStorage.setItem('name' , 'rissuu')
// localStorage
// localStorage.removeItem('name')
// localStorage.clear()
// //JSON in javascript.
// javascript object notation

// obj = {name: "rishabh" , length:1 , a: {this: "rishbah"} }
// jso = JSON.stringify(obj);
// console.log(typeof jso)
// console.log(jso)
// parsed = JSON.parse(`{"name":"rishabh","length":1,"a":{"this":"rishbah"}}`)
// console.log(parsed);
