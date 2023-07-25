const colors = ["skyblue", "orange", "rgba(183,122,400)", "#f14029"];

const jack = ["Raja", "Mantri", "Santri", "Chor", "Sipahi"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNum = randomColor();
  document.body.style.backgroundColor = colors[randomNum];

  color.textContent = colors[randomNum];
});

function randomColor() {
  return Math.floor(Math.random() * colors.length);
}
