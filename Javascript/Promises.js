// const a = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) resolve("Promise Fulfilled");
//   else reject("Some Technical Error");
// });

// a.then((parameter) => {
//   console.log(parameter);
// }).catch(() => {
//   console.log(error);
// });

const arr  = [];


const fetchData = (arr =[]) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            arr.push({name:"abhi"});
            if(arr.length>0) resolve("Data Fetched");
            else reject("Some technical Error");
        },2000);
    });
};

fetchData(arr)
    .then((message) => console.log(message))
    .then(() => console.log(2))
    .then(() => console.log(3))
    .then(() => console.log(4))
    .then(() => console.log(5))
    .catch(()=> console.log(message))
    .finally(()=> console.log("Will work either way"))