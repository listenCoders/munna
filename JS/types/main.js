// types of data
var a = "text";
var b = 12345;
var c = true;
var d = {};


console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);

console.log("=======================");
// Array and Length
var array = ["Welcome to bangladesh"];
console.log("Length", array[0].length);

console.log("=======================");
// Ex:: Loop 1 to 10
for (var i = 0; i < 10; i++) {
  var element = i;
  console.log(element + 1);
}

console.log("=======================");
// Ex:: Loop array multi time
for (var i = 0; i < 5; i++) {
  var element = array[0];
  console.log(i + 1, ":", element);
}