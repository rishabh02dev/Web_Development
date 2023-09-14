const url = "https://catfact.ninja/fact";
const h1 = document.querySelector("h1");

// const fetchData = ()=>{
//     fetch(url)
//     .then((response)=>{
//         return response.json()
//     .then((data)=> (h1.innerText = data.fact))
//     .catch((e)=> console.log(e))
//     .finally(()=> console.log("all done"))
//     });
// };

// fetchData();

// const fetchData = async () =>{
//     const response = await fetch(url);
//     const data = await response.json();
//     h1.innerText = data.fact;
// }

// fetchData();

// console.log("a");

// setTimeout(() => {
//     console.log("timeout");
// }, 0);

// Promise.resolve().then(() => console.log("Promise"));

// console.log("z");

// console.log("a");

// const fetchData = async () =>{
//     console.log("f1");
//     const response = await fetch(url);

//     const data = await response.json();

//     h1.innerText = data.fact;

//     console.log("f4");
// };

// fetchData();
// console.log("z1");
// console.log("z2");


const fetchData = async () => {
    try{
        throw new Error("meri marzi wala error");

        const response = await fetch(url);

        const data = await response.json();

        h1.innerText = data.fact;
    } catch(error){
        console.log(error);
    }
    finally{
        console.log("Hogaya over");
    }
};


fetchData();