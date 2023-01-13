var fans = document.querySelector(".fans");
//console.log(fans);
var fish = document.querySelector(".fish");
//console.log(fish);
var pets = document.querySelector(".pets");
//console.log(pets);

fans.addEventListener("mouseover", function () {
  fans.innerText = "123k";
});

fish.addEventListener("click", function () {
  fish.innerText = "47k";
});

pets.addEventListener("dblclick", function () {
  pets.innerText = "20k";
});

var toggle = document.querySelector("#toggle");
//console.log(toggle);
var ball = document.querySelector(".ball");
//console.log(ball);
var h1 = document.querySelector("h1");
//console.log(h1);
var body = document.querySelector("body");
//console.log(body);

toggle.addEventListener("click", function () {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    ball.classList.remove("move-right");
    h1.innerText = "Stealth Quincy";
  } else {
    body.classList.add("light");
    ball.classList.add("move-right");
    h1.innerText = "Party Quincy";
  }
});
