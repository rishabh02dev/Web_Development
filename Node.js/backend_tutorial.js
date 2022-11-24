const fs = require("fs");
const text = fs.readFileSync("rishabh.txt", "utf-8");
console.log("the content of the file is ")
console.log(text);
console.log("creating a new file....")
fs.writeFileSync("rohan.txt" , text);


//there are the errors faced while using this fs module


//Error: ENOENT: no such file or directory, open 'rishabh.txt'
// at Object.openSync (node:fs:600:3)     
// at Object.readFileSync (node:fs:468:35)
// at Object.<anonymous> (c:\Users\hpw\Downloads\WEBDEV COURSE\codewithharry\Node.js\backend_tutorial.js:2:17)
// at Module._compile (node:internal/modules/cjs/loader:1159:14)
// at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)
// at Module.load (node:internal/modules/cjs/loader:1037:32)
// at Module._load (node:internal/modules/cjs/loader:878:12)
// at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
// at node:internal/main/run_main_module:23:47 {
// errno: -4058,
// syscall: 'open',
// code: 'ENOENT',
// path: 'rishabh.txt'
// }

