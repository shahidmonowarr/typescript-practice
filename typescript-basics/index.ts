const x = "Hello World";

const y : string = "hello World 2";

function getLowerCase(str: string) {
  return str.toLowerCase();
}

console.log(getLowerCase(x));
console.log(getLowerCase("Hello World 3"));
console.log(getLowerCase("24"));

//normal function
const a: number = 26;

function add(a: number, b: number): number {
  return a + b;
}

add(3,4);
add(a,3);

//arrow function
const substract = (number1: number, number2: number): number =>{
    return number1 - number2;
}

substract(3,4);

//array
const hobbies: string[] = ["Sports", "Cooking"];
const arr: number[] = [1,2,3,4,5];

//array<T>
const arr2: Array<number | string> = [1,2,3,"abdul"];


//type

type numberAndArray = number | string;

const num: numberAndArray = 3; 

//normal object
const person: {
    name: string;
    age: number;
    hobbies: string[];
} = {
    name: "Max",
    age: 30,
    hobbies: ["Sports", "Cooking"],
}


//interface
interface Person {
    name: string,
    age: number,
    hobbies?: string[],
}

const person2: Person = {
    name: "Max",
    age: 30,
    hobbies: ["Sports", "Cooking"],
}

const person3: Person = {
    name: "magic",
    age: 30,
    hobbies: ["Sports", "Cooking"],
}


//enums

enum Color {
    color1 = "red",
    color2 = "blue",
    color3  = "green",
}

console.log(Color.color1);

//generics
// generic function is a function that can work with different types of data types. its work based on the parameter that we pass to it.
// function _concat<T>(a: T, b: T): T {
//     return a + b;
// }

// _concat<number>(1,2);
// _concat<string>("hello", "world");