var card = document.querySelector("#card");
var heart = document.querySelector("i");
card.addEventListener("dblclick",function()
{
    heart.style.transform = "translate(-50%,-50%) scale(5)"
    heart.style.opacity = 0.8;
    setTimeout(function(){
        heart.style.opacity = 0;
    },1000)
    setTimeout(function(){
        heart.style.transform = "translate(-50%,-50%) scale(0)"
    },3000)
})