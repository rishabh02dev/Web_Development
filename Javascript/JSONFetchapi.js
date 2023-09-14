const url = "https://catfact.ninja/fact";
const h1 = document.querySelector("h1");

const fetchData = ()=>{
    fetch(url)
    .then((response)=>{
        return response.json()
    .then((data)=> (h1.innerText = data.fact))
    .catch((e)=> console.log(e))
    .finally(()=> console.log("all done"))
    });
};

fetchData();

