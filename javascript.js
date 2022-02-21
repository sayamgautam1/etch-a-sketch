let container = document.getElementById("container");
for (var i = 0; i < 255; i++) {
  container.innerHTML += `<div class="box ${i}" id="box${i}"> </div>`;
}

function originalColor(box) {
  clearRadio();
  box.style.backgroundColor = "wheat";
}

function colorChange1(box) {
  box.style.backgroundColor = "red";
}
function colorChange2(box) {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  box.style.backgroundColor = "#" + randomColor;
}
function colorChange3(box) {
  box.style.backgroundColor = "black";
}

// function check(ev) {
//   ev.preventDefault();
//   const buttons = form.querySelectorAll('input[type="radio"]');
//   buttons.forEach((btn) => {
//     if (btn.checked) {
//       const color = btn.value;
//       changeHoverColor(color);
//     }
//   });
// }
// function changeHoverColor(color) {
//   console.log("change color", color);
//   buttons = document.querySelectorAll("section#container > .box");
//   buttons.forEach((btn) =>
//     btn.addEventListener("mouseover", (ev) => {
//       ev.target.style.backgroundColor = color;
//     })
//   );
// }

function check(e) {
  e.preventDefault();

  if (document.getElementById("button1").checked == true) {
    for (var i = 0; i < 255; i++) {
      let box = document.getElementById(`box${i}`);
      box.addEventListener("mouseover", () => colorChange1(box));
      document
        .getElementById("btn")
        .addEventListener("click", () => originalColor(box));
    }
  } else if (document.getElementById("button2").checked == true) {
    for (var i = 0; i < 255; i++) {
      let box = document.getElementById(`box${i}`);
      box.addEventListener("mouseover", () => colorChange2(box));
      document
        .getElementById("btn")
        .addEventListener("click", () => originalColor(box));
    }
  } else if (document.getElementById("button3").checked == true) {
    for (var i = 0; i < 255; i++) {
      let box = document.getElementById(`box${i}`);
      box.addEventListener("mouseover", () => colorChange3(box));
      document
        .getElementById("btn")
        .addEventListener("click", () => originalColor(box));
    }
  } else {
    alert("please select a color button");
  }
}

for (var i = 0; i < 255; i++) {
  let box = document.getElementById(`box${i}`);
  document
    .getElementById("btn")
    .addEventListener("click", () => originalColor(box));
}
function clearRadio() {
  let radioButton = document.querySelectorAll("input[type=radio]");
  for (let i = 0; i < radioButton.length; i++) {
    let radioStatus = radioButton[i];
    radioStatus.checked = false;
  }
}
