const zodiac = document.getElementById("zodiac");
const body = document.body;


const changeBackground = () => {
    switch(zodiac.value){
        case "aries":
        body.style.backgroundColor = "red";
        break;
        case "tarus":
        body.style.backgroundColor = "yellow";
        break;
        case "gemini":
        body.style.backgroundColor = "pink";
        break;
        case "cancer":
        body.style.backgroundColor = "blue";
        break;
        case "leo":
        body.style.backgroundColor = "purple";
        break;
        case "virgo":
        body.style.backgroundColor = "orange";
        break;
        case "libra":
        body.style.backgroundColor = "green";
        break;
        case "scorpio":
        body.style.backgroundColor = "brown";
        break;
        case "sagittarius":
        body.style.backgroundColor = "crimson";
        case "aquarius":
        body.style.backgroundColor = "black";
        break;
        case "capricon":
        body.style.backgroundColor = "gray";
        break;
        case "pisces":
        body.style.backgroundColor = "#fce514";
        break;
    }
};

const button = document.getElementById("reset");

const reset = () =>{
    body.style.backgroundColor = "white";
   
}