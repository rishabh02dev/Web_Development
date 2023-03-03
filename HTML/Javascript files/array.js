const nums = [4,1,2,8,2,8,6];

console.log(nums.indexOf(8));

//if doesn't found returns -1
console.log(nums.includes(8));
//if doesn't found it returns false;

nums.push("Tarashaa");
nums.unshift("vaishaali");
nums.pop();

const subArray = nums.slice(2,5);
//5 here is exclusive so in ordere to extract 4 we are writing it as 2,5


// const words = [
//   "rishabh",
//   "shukla",
//   "this is minuu",
//   "this is chindii",
//   12,
//   true,
//   { name: "rishuu" },
//   function hello() {
//     console.log("rishabh shukla");
//   },
// ];
// // console.log(words[2]);
// console.log(words);

// const newWords = words;

// newWords[1] = "kelaa";

// console.log(typeof words);
// console.log(words.length);
// console.log(newWords);
