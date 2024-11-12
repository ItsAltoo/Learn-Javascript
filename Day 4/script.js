let box1 = document.querySelector("#box1 p");
let btn = document.getElementById("btn");
const li = document.querySelectorAll("#box1 ul li");
const box2 = document.querySelector(".box2 h3");
const addBox = document.getElementById("btn2");
const rmBox = document.getElementById("rmBox");

const changeColor = () => {
  for (let i = 0; i < li.length; i++) {
    setTimeout(() => {
      li[i].style.backgroundColor = "tomato";
      if (i == 2) {
        li[i].style.backgroundColor = "blue";
        li[i].style.color = "white";
      }
    }, 3000);
  }
};

function btnClick() {
  btn.innerHTML = "Sudah Di Klik";
  btn.style.backgroundColor = "blue";
  btn.style.color = "#fff";
  boxDua();
  changeColor();
}

const boxDua = () => {
  setTimeout(() => {
    box2.innerHTML = "rawrrr";
  }, 2000);
};



addBox.addEventListener("click", function () {
  const boxii = document.querySelector(".box2");
  const paragNew = document.createElement("p");
  const teksParagNew = document.createTextNode("parag baru bre..");

  paragNew.appendChild(teksParagNew);
  boxii.appendChild(paragNew);
});

rmBox.addEventListener('click',function(){
  const boxii = document.querySelector(".box2");
  const paragDel = document.querySelector("p:nth-child()");
})
