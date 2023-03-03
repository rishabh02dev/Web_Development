const greet = (count) => {
  for (let i = 0; i < count; i++) console.log("hellow world");
};

greet(3);

//Another way to write arrowfunction and it takes only one return functions

//callback functions

const calculate = (a,b, operation) =>{
    return operation(a,b);
}


//// method 1 
const addition = calculate(3,4, function (num1 , num2){
    return num1+num2;
});

console.log(addition);


////method 2 
const subtraction = (a,b) => a-b;

const subResult = calculate(8,3, subtraction);

console.log(subresult);


//// method 3
function multiply (a,b){
    return a*b;
}


const mulResult = calculate(3,2,multiply);

console.log(mulResult);
