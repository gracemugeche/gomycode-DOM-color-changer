//js/main.js

document.addEventListener("DOMContentLoaded", function () {
  //selecting elements
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");
  // Function that generates a random hex color
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  // When the button is clicked, change the box color
  changeColorBtn.addEventListener("click", function () {
    // Call the function
    const randomColor = getRandomColor();
    colorBox.style.backgroundColor = randomColor;
  });
});
