var latt = document.querySelectorAll(".upp");
let textArea = document.querySelector("textarea");

let spacebar = document.getElementById("space-bar");
let crossbar = document.querySelector(".cross");

function myfunction() {
  var cppp = document.querySelector("#cap");
  var space = document.querySelector(".space-bar");

  function fun() {
    // cppp.classList.toggle("caps-lock");
  }
  // fun();
  cppp.classList.toggle("caps-lock");
  for (let i = 0; i < latt.length; i++) {
    latt[i].classList.toggle("upps");
  }

  var lightchange = document.querySelector(".cap-change");
  lightchange.classList.toggle("laddu");
  space.classList.toggle("space-bar-caps");
}

let chars = [];
latt.forEach((btn) => {
  btn.addEventListener("click", () => {
    textArea.value += btn.innerText;
    chars = textArea.value.split("");
  });
});

crossbar.addEventListener("click", () => {
  let currentValue = textArea.value;
  let lines = currentValue.split("");
  if(lines.length > 0){
    lines.pop();
    currentValue = lines.join("");
    console.log(currentValue);
    textArea.value =currentValue;
  }
});

let pressTimer;
crossbar.addEventListener('mousedown', function() {
  pressTimer = setTimeout(function() {
    // Clear textarea content on long press
    textArea.value = '';
  }, 1000); // Adjust the time (in milliseconds) to define the long press duration
});

crossbar.addEventListener('mouseup', function() {
  clearTimeout(pressTimer);
});

crossbar.addEventListener('mouseout', function() {
  clearTimeout(pressTimer);
});




spacebar.addEventListener("click", () => {
  chars.push(" ");
  textArea.value = chars.join("");
});