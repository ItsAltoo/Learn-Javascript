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

// const rRed = document.querySelector("input[name = red]");
// const rGreen = document.querySelector("input[name = green]");
// const rBlue = document.querySelector("input[name = blue]");

// rRed.addEventListener("input",function(){
//   const red = rRed.value;
//   const green = rGreen.value;
//   const blue = rBlue.value;
//   document.body.style.backgroundColor = "rgb("+ red +","+ green +","+ blue +")"
//   console.log(red,green,blue);
// })

// rGreen.addEventListener("input",function(){
//   const red = rRed.value;
//   const green = rGreen.value;
//   const blue = rBlue.value;
//   document.body.style.backgroundColor = "rgb("+ red +","+ green +","+ blue +")"
//   console.log(red,green,blue);
// })

// rBlue.addEventListener("input",function(){
//   const red = rRed.value;
//   const green = rGreen.value;
//   const blue = rBlue.value;
//   document.body.style.backgroundColor = "rgb("+ red +","+ green +","+ blue +")"
//   console.log(red,green,blue);
// })

const range = document.querySelectorAll("input");

for (let i = 0; i < range.length; i++) {
  range[i].addEventListener("input", function () {
    const r = range[0].value;
    const g = range[1].value;
    const b = range[2].value;

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    console.log(r, g, b);
  });
}

document.addEventListener("mousemove", function (event) {
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);

  document.body.style.backgroundColor = "rgb(" + xPos + ", " + yPos + ", 100)";
});
