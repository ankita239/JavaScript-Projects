var button = document.querySelector("#addrem");
var istatus = document.querySelector("h1");
var flag = 0;
button.addEventListener("click", function () {
  if (flag == 0) {
    button.style.backgroundColor = "#dadada";
    button.innerHTML = "Remove";
    istatus.innerHTML = "Friends :)";
    istatus.style.color = "green";
    flag = 1;
  }
  else{
    button.style.backgroundColor = "rgb(3, 164, 3)";
    button.innerHTML = "Add Friend";
    istatus.innerHTML = "Strangers";
    istatus.style.color = "red";
    flag = 0;
  }
});
