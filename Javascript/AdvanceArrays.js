const arr = [2,4,6,8,10];


// arr.find((value,index)=>{
//     if(value === 8){
//         console.log(index);
//     }
    
// });


// const result = arr.filter((value,index)=>{
//     if(value>4){
//         return value;
//     }
// });

// console.log(result);

// const result = arr.every((value,index)=>{
//     return value>4;
// });
// console.log(result);

// const result = arr.some((value,index)=>{
//     return value>4;
// });
// console.log(result);

// for(const value of arr){
//     console.log(value);
// }
// for(const index of arr){
//     console.log(index);
// }

// arr.forEach((value,index)=>{
//     console.log(value);
//     console.log(index);
// })

// let totalSum =0;
// arr.forEach((value,index)=>{
//     totalSum+=value;
// });

// console.log(totalSum);

// const result = arr.map((value,index)=>{
//     return value+20;
// })

// console.log(result);


const result = arr.reduce((total,value,index)=>{
    return total,value,index;
});

// total previous value;
// value current value;
// index is current index;
console.log(result);