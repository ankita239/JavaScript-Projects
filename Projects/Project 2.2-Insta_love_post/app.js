var pic = document.querySelector("#postimg");
var like = document.querySelector("#on-pic");
var colored = document.querySelector("#colored");
pic.addEventListener("dblclick", function () {
  like.style.transform = "translate(-50%,-50%) scale(3)";
  like.style.opacity = 0.8;
  colored.style.color = "red";
  setTimeout(function () {
    colored.style.transform = "scale(1.4)";
  }, 0);
  setTimeout(function () {
    colored.style.transform = "scale(1)";
  }, 500);
  setTimeout(function () {
    like.style.opacity = 0;
  }, 1000);
  setTimeout(function () {
    like.style.transform = "translate(-50%,-50%) scale(0)";
  }, 3000);
});
  colored.addEventListener("click", function () {
   like.style.transform = "translate(-50%,-50%) scale(3)";
   like.style.opacity = 0.8;
   colored.style.color = "red";
    setTimeout(function () {
      colored.style.transform = "scale(1.4)";
    }, 0);
    setTimeout(function () {
      colored.style.transform = "scale(1)";
    }, 500);
    setTimeout(function () {
      like.style.opacity = 0;
    }, 1000);
    setTimeout(function () {
      like.style.transform = "translate(-50%,-50%) scale(0)";
    }, 3000);
  });

