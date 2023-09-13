//Session Storage
const input = document.getElementById("myInput");
const btn = document.getElementById("myBtn");
const _delete = document.getElementById("delete");
// const btnClick = () =>{
//     sessionStorage.setItem("key1" , input.value);
// };

// _delete.addEventListener("click" , () =>{
//     sessionStorage.clear();
// } );

//Local Storage it doesn;t get deleted even after we close the broswer

const btnClick = () => {
  localStorage.setItem(
    "key1",
    JSON.stringify({ name: "Abhi", surname: "Singh" })
  );
};

btn.addEventListener("click", btnClick);

_delete.addEventListener("click", () => {
  localStorage.clear();
});

if (localStorage.getItem("key1)")) {
 console.log(JSON.parse(localStorage.getItem("key1")));
}
