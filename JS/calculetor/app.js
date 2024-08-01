let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let expression = "";

let array = Array.from(buttons);

array.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      expression = eval(expression);
      input.value = expression;
    } else if (e.target.innerHTML == "AC") {
      expression = "";
      input.value = expression;
    } else if (e.target.innerHTML == "DEL") {
      expression = expression.substring(0, expression.length - 1);
      input.value = expression;
    } else {
      expression += e.target.innerHTML;
      input.value = expression;
    }
  });
});