var bulb = document.querySelector("#bulb");
var button = document.querySelector("button");
var flag = 0;
 button.addEventListener("click",function()
 {
    if(flag == 0)
    {
        bulb.style.backgroundColor = "yellow";
        button.innerHTML = "OFF";
        flag = 1;
    }
    else{
        bulb.style.backgroundColor = "transparent";
        button.innerHTML = "ON";
        flag = 0;
    }
 })