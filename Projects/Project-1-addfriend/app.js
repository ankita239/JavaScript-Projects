var add = document.querySelector("#add");
var istatus = document.querySelector("h1") 
var remove = document.querySelector("#remove");
add.addEventListener("click",function()
{
    add.innerHTML = "Added!"
    add.style.backgroundColor = "#dadada"
    istatus.innerHTML = "Friends :)"
    istatus.style.color = "green";
})
remove.addEventListener("click",function()
{
    istatus.innerHTML="Strangers";
    istatus.style.color = "red";
    add.innerHTML = "Add Friend"
    add.style.backgroundColor = "rgb(141, 175, 239)";
})