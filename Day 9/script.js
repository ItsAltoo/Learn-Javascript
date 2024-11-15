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

  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
