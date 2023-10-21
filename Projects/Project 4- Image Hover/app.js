//For 1 element
// var elem1 = document.querySelector("#elem1")
// var elemimg = document.querySelector("#elem1 img")
// elem1.addEventListener("mousemove",function(delts){
//     elemimg.style.left = delts.x + "px"
//     elemimg.style.top = delts.y + "px"
// })
// elem1.addEventListener("mouseenter",function(delts){
//     elemimg.style.opacity = 1;
// })
// elem1.addEventListener("mouseleave",function(delts){
//     elemimg.style.opacity = 0;
// })
var elem = document.querySelectorAll(".elem")
elem.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        // val.style.backgroundColor = "yellow"
        // val.style.fontcolor = "black"
        val.childNodes[1].style.opacity = 1
    })
    val.addEventListener("mouseleave",function(){
        // val.style.backgroundColor = "black"
        // val.style.color = "yellow"
        val.childNodes[1].style.opacity = 0
    })
    val.addEventListener("mousemove",function(delts)
    {
        val.childNodes[1].style.left = delts.x + "px"
        val.childNodes[1].style.top = delts.y + "px"
    })
});

