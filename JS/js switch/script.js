const btn = document.getElementById("btn");
const input = document.getElementById("input");
const res = document.getElementById("show-res");

btn.addEventListener("click", () => {
  let value = parseInt(input.value);

  switch (true) {
    case value <= 18:
      res.innerHTML = "Picci";
      break;
    case value <= 35:
      res.innerHTML = "Guan";
      break;
    case value <= 80:
      res.innerHTML = "Buira";
      break;
    case value <= 115:
      res.innerHTML = "Buira max pro";
      break;
    default:
      res.innerHTML = "Tui ekhono beche asot kamne?";
      break;
  }
});

// 10/100
