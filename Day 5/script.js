const btn = () => {
  const button = document.querySelectorAll(".kotak");
  for (let i = 1; i < button.length; i++) {
    if (i == 0) {
      button[i].innerHTML = `Tmbol ke - ${i}`;
    } else if (i == 1) {
      button[i].innerHTML = `Tmbol ke - ${i}`;
    } else if (i == 2) {
      button[i].innerHTML = `Tmbol ke - ${i}`;
    }
  }
};
