// let newDiv = document.createElement('div');
// newDiv.textContent = 'Hello World!';
// document.body.appendChild(newDiv);

// let button = document.querySelector('button');
// button.addEventListener('click', function() {
//   alert('Button was clicked!');
// });

// let fruits = ['apple', 'banana', 'cherry'];
// let fruitList = document.getElementById('fruit-list');
// let addFruitButton = document.getElementById('add-fruit');

// function displayFruits() {
//   fruitList.innerHTML = ''; // Clear existing items
//   fruits.forEach(fruit => {
//     let li = document.createElement('li');
//     li.textContent = fruit;
//     fruitList.appendChild(li);
//   });
// }

// displayFruits(); // Initial display

// addFruitButton.addEventListener('click', () => {
//   fruits.push('orange'); // Add a new fruit
//   displayFruits(); // Update the list
// });

// const fruits = ["Apple", "Banana", "Mango"];

// fruits[1] = "Orange";

// console.log(fruits[0]); //Apple
// console.log(fruits[1]); //Orange
// console.log(fruits[2]); // Mango

// console.log(fruits.length);

// push method

// const fruits = ["Apple", "Banana", "Mango"];
// fruits.push(100); // last element
// fruits.pop(); //remove last one
// fruits.unshift(99); //1st element
// fruits.shift(); //remove 1st 1

// console.log(fruits);

const fruits = ["Apple", "Banana", "Aango"];

// for (let i = 0; i < fruits.length; i++) {
//   const element = fruits[i];
//   console.log(element);
// }

// for (const i of fruits) {
//   console.log(i);
// }

// fruits.forEach(function (fruit) {
//     console.log(fruit)
// });

const moreFruits = ["Elderberry", "Fig"];

const allFruits = fruits.concat(moreFruits);
console.log(allFruits[3]);

console.log(allFruits.indexOf("Fig"));

console.log(allFruits.find((fruit) => fruit.startsWith("B")));

console.log(allFruits.filter((fruit) => fruit.startsWith("A")));

// console.log(allFruits.slice(0, 3));
