const changeBg = document.getElementById("changeBg");

changeBg.addEventListener("click", function () {
  document.body.classList.toggle("colorBg");
});

const randomColor = document.createElement("button");
const textRC = document.createTextNode("Random BG");
randomColor.appendChild(textRC);
randomColor.setAttribute("type", "button");
changeBg.after(randomColor);

randomColor.addEventListener("click", function () {
  const r = Math.round(Math.random() * 1 * 255);
  const g = Math.round(Math.random() * 1 * 255);
  const b = Math.round(Math.random() * 1 * 255);
  const a = Math.round(Math.random() * 1 * 255);

  document.body.style.backgroundColor =
    "rgba(" + r + "," + g + "," + b + "," + a + ")";

  console.log("RGBA : " + "", r, g, b, a);
});

const rRed = document.querySelector("input[name = red]");
const rGreen = document.querySelector("input[name = green]");
const rBlue = document.querySelector("input[name = blue]");
