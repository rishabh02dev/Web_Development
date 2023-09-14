const name = document.getElementById("name");
const tagContainer = document.querySelector(".tags");

const nameGenerator = () =>{
    const tag = document.createElement("div");
    tag.setAttribute("class" , "tag");

    tag.innerText = `Hey I am ${name.value} here`;

    tagContainer.append(tag);

};