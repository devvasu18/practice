
/* <div class="headerdiv">
          <div class="divheader">
            <button class="hamburger" id="hamburger">
              ☰
            </button>
            <ul >
                <button id="lgtbtn" class="btn btn-danger"  >Logout</button></ul>  
                <div id="message"><!--logout successfull msg --> </div>        
          </div>
          <div class="divheader">
            <h1>my shop</h1>
          </div>
          <div class="divheader" id="cart">
            <button id="view-cart">
              view-cart(<span id="cart-count">0</span>)
            </button>
          </div>
        </div>
      </header>*/
      
    
// JavaScript is a lightweight, interpreted programming language primarily used for web development.
// It allows you to make web pages interactive (e.g., handle user actions, update DOM elements).

console.log("Welcome to JavaScript!"); // Output: Welcome to JavaScript 

//  2. Variables and Constants

// Variables store data and are declared using let, const, or var.

let name = "Vasu";       // Can be reassigned
const age = 18;          // Cannot be reassigned
var country = "India";   // Old style, avoid in modern code

console.log(name, age, country);

// Dynamic typing:
let data = 42;           // Initially a number
data = "A string now";   // Can be reassigned to a different type

// data types 
let number = 10;                   // Number
let string = "Hello, World!";      // String
let boolean = true;                // Boolean (true/false)
let array = [1, 2, 3, "four"];     // Array
let object = { key: "value" };     // Object
let undef;                         // Undefined
let emptyValue = null;             // Null

console.log(typeof number);        // Check the type of a variable

// Operators

// Arithmetic Operators
let sum = 5 + 3;                  // Addition
let difference = 10 - 4;          // Subtraction
let product = 2 * 6;              // Multiplication
let quotient = 12 / 4;            // Division
let remainder = 10 % 3;           // Modulus

console.log(sum, difference, product, quotient, remainder);

// Comparison Operators
console.log(5 === "5");           // Strict equality (false)
console.log(5 == "5");            // Loose equality (true)
console.log(5 !== 10);            // Not equal

// Logical Operators
let x = true, y = false;
console.log(x && y);              // Logical AND (false)
console.log(x || y);              // Logical OR (true)
console.log(!x);                  // Logical NOT (false)

//functions

// Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Vasu"));

// Function Expression
const square = function(num) {
    return num * num;
};
console.log(square(5));

// Arrow Functions
const multiply = (a, b) => a * b;
console.log(multiply(4, 5));

//control flow 

// if-else
let weather = prompt("is it rainy or sunny ?");
if (weather === "sunny") {
    console.log("Wear sunglasses!");
} else if (weather === "rainy") {
    console.log("Carry an umbrella!");
}else{
    console.log("stay prepared for any weather!")
}

// Ternary Operator
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote);

// switch
let fruit = "apple";
switch (fruit) {
    case "banana":
        console.log("Banana selected!");
        break;
    case "apple":
        console.log("Apple selected!");
        break;
    default:
        console.log("Fruit not found.");
}

// loops

// for loop
for (let i = 1; i <= 5; i++) {
    console.log("Roll NO.:", i);
}
for (let i=0 ;i<=5;i++){
    console.log(i);
}

// while loop
let count = 0;
while (count < 3) {
    console.log("Count:", count);
    count++;
}

// do-while loop
let num = 0;
do {
    console.log("Number is:", num);
    num++;
} while (num < 3);

//for in loop
let personv = { name: "vasu", age: 18, city: "bangalore" };
for (let key in personv) {
    console.log(key, personv[key]); // Outputs: name John, age 25, city New York
}

//for of loop
let str = "Hello";
for (let char of str) {
    console.log(char); // Outputs: H, e, l, l, o
}

// arrays
let colors = ["red", "blue", "green"];
console.log(colors[1]);            // Access element
colors.push("yellow");             // Add an element
console.log(colors);

// Looping through arrays
colors.forEach((color, index) => {
    console.log(index, color);
});

// objects

let person = {
    name: "Vasu",
    age: 18,
    greet: function() {
        return `Hello, ${this.name}!`;
    }
};
console.log(person.greet());      // Call object method

// Add property
person.country = "India";
console.log(person);

//dom manipulation 

// Selecting elements
let heading = document.querySelector("h1");
console.log(heading);

// Modifying elements
heading.textContent = "JavaScript Notes Updated!";
heading.style.color = "blue";

// Adding an event listener
document.addEventListener("DOMContentLoaded", () => {
let button = document.querySelector("#clickButton");
if (button) {
button.addEventListener("click", () => {
    alert("Button Clicked!");
});
} else {
    console.error("Button not found!");
}
});
// event handling

// Event types: click, mouseover, keydown, etc.
document.addEventListener("keydown", (event) => {
    console.log("Key pressed:", event.key);
});

// asynchronous javascrit

// Callbacks
setTimeout(() => {
    console.log("Executed after 2 seconds");
}, 2000);

// Promises
let promise = new Promise((resolve, reject) => {
    let success = false;
    if (success) resolve("Promise resolved!");
    else reject("Promise rejected.");
});
promise.then((message) => console.log(message)).catch((error) => console.log(error));

// Async/Await
async function fetchData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
fetchData();

// advanced topics

// Object Destructuring
let person1 = {
    name:"vasu",
    age:18
};
let { name: personName, age: personAge } = person1;
console.log(person1 ,personName,personAge);

// Spread Operator
let newColors = [...colors, "purple"];
console.log(newColors);

// Classes
class Person {
    constructor(name, age) {
        this.name = name; // Assign name to the object
        this.age = age;   // Assign age to the object
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Create an instance of the class
let person1v = new Person("John", 25);
person1v.greet(); // Output: Hello, my name is John and I am 25 years old.
 
let person2v = new Person("vasu",18);
person2v.greet();