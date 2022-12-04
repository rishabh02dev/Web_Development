console.log("his is module");
function average (arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}

module.exports = {
    avg : average,
    name : "harry",
    repo : "Github"
}
module.exports.name = "rishabh";  
  
