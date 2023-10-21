pic = document.querySelector("#postimg");
like = document.querySelector("#icon");
pic.addEventListener("dblclick",function()
{
    icon.style.transform = "translate(-50%,-50%) scale(1)"
    
    setTimeout(function()
    {
      icon.style.opacity = 0;
    },1000)
    setTimeout(function(){
        icon.style.opacity = 0.8;
        icon.style.transform = "translate(-50%,-50%) scale(0)"
    },3000)
})