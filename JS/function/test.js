// function
// how to define a function

const a = 5;
const b = 6;

// recive = parameter
function outPut(a, b) {
  //   console.log("First 2", a, b);
}

// send = argument
outPut(a, b);

// use case
function sumFunc(a, b) {
  console.log(a + b);
}

function subFunc(a, b) {
  console.log(a - b);
}

function multiFunc(a, b) {
  console.log(a * b);
}

function deviFunc(a, b) {
  console.log(a / b);
}

// Calculate fun
function calFunc(a, b) {
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(a / b);
}

const array = [1, 2, 3, 4];
console.log(array[2], "From array data");
//
console.log("Hello World");

//

calFunc(2, 5);

sumFunc(4, 4);

sumFunc(array[1], array[2]);

// Ex 2
const fName = "Munna";
const lName = "Munna";

function fullName(a, b) {
  console.log(a, b);
}

fullName(fName, lName);
