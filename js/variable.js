

function sayHi() {
    var name = "John" 
  console.log("Hi, " + name);
}

sayHi(); // Hi, John


let age = 25;
if(age == 25){
    let age = 30;
    console.log(age); 
}

console.log(age);

const pi = 3.14;




console.log(Number.MAX_SAFE_INTEGER);

var person = ["John", 25, "USA", {adress: "us", phone: 5894943}]; // array 0 - n-1, 0 -3

var person2 = { // object
    name: "John",
    age: 25,
    country: "USA"
}

console.log(person[0])
console.log(person2.name)

function add(a, b){
    return a + b;
}

var data = "Hello World"; // String

data  = 25; // Number

// Type conversion
var greetings = "Hello" + 5;
console.log(typeof greetings);

var greetings = "Hello" + String(5);
console.log(typeof greetings);

var myString = "53435.5353FASLKF";

var myString2 = "53435389439834";



console.log(Number(myString));//NaN

console.log(Number(myString2)); //
console.log(parseInt(myString,16)); // 53435389439834
console.log(parseFloat(myString2)); // 53435389439834



// var number = prompt("Input Something")

// console.log(typeof number); // "10"

// // number = Number(number)

// console.log(typeof number)

// if (Number(number) === 10){
//     console.log("Equal")
// }

person = '{"count": "42"}'; //{count: 42}

console.log(typeof person);
console.log(person.count);


person = JSON.parse(person);
console.log(typeof person);
console.log(person.count); 

var a = 10;
var b = 20;

a = a + 5; // a += 5;
b = b - 5; // b -= 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
console.log(a++);
console.log(a--);


console.log(a == b); // comparing by value

5 == "5"
5 === "5" // False: value is same but type is different

5 != "5"
5 !== "5"

var operation = (5 + 10) * 18 - (2 / 2); //BODMAS