//Here the displaysum is taken as a callback function and the sum function is a high order function.

// const arr = [1, 2, 3, 4, 5, 6];

// function calculator(arr = [], callback) {
//   const ans = [];

//   for (let i = 0; i < arr.length; i++) {
//     ans.push(callback(arr[i]));
//   }
//   console.log(ans);
// }

// calculator(arr, (a) => a * 10);
// calculator(arr, (a) => a / 10);
// calculator(arr, (a)=> a+10);
// calculator(arr , (a)=> Math.abs(a-10));


//Using callback as an asynchronous function

const fetchData = () =>{
    setTimeout(() =>{
        gamesList.push(
            {
                name:"game 1",
                id: "xsdasdsda",
            },
            {
                name:"game 2",
                id:"csdsddasdsda",
            },
            {
                name:"game 3",
                id:"zsdasdsda",
            }
        );

        console.log(gamesList);
    }, 4000);
};


fetchData();
