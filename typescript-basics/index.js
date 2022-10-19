var x = "Hello World";
var y = "hello World 2";
function getLowerCase(str) {
    return str.toLowerCase();
}
console.log(getLowerCase(x));
console.log(getLowerCase("Hello World 3"));
console.log(getLowerCase("24"));
//normal function
var a = 26;
function add(a, b) {
    return a + b;
}
add(3, 4);
add(a, 3);
//arrow function
var substract = function (number1, number2) {
    return number1 - number2;
};
substract(3, 4);
//array
var hobbies = ["Sports", "Cooking"];
var arr = [1, 2, 3, 4, 5];
var num = 3;
//normal object
var person = {
    name: "Max",
    age: 30,
    hobbies: ["Sports", "Cooking"]
};
var person2 = {
    name: "Max",
    age: 30,
    hobbies: ["Sports", "Cooking"]
};
var person3 = {
    name: "magic",
    age: 30,
    hobbies: ["Sports", "Cooking"]
};
//enums
var Color;
(function (Color) {
    Color["color1"] = "red";
    Color["color2"] = "blue";
    Color["color3"] = "green";
})(Color || (Color = {}));
console.log(Color.color1);
