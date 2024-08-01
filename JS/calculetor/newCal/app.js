const hello = document.getElementById("hello");
const input = document.getElementById("inputBox");
const button = document.querySelectorAll("button"); 

const array = Array.from(button);// 1

let text = "";



// 2
array.forEach((btn) => {
  btn.addEventListener("click", (e) => { 
    if (e.target.innerHTML == "=") {
      text = eval(text);
      input.value = text;
    } else if (e.target.innerHTML == "AC") {
      text = "";
      input.value = text;
    } else if (e.target.innerHTML == "DEL") {
      text = text.substring(0, text.length - 1);
      input.value = text;
    } else {
      text += e.target.innerHTML;
      input.value = text;
    }
  });
});