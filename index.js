<!DOCTYPE html>
<html>
<body>
<h2>JavaScript</h2>
<p>When adding a number and a string, JavaScript will treat the number as a string.</p>
<p id="demo"></p>
<script>
let x = 16 + "Volvo";
document.getElementById("demo").innerHTML = x;
</script>
<h1>JavaScript Functions</h1>
<p>Call a function which performs a calculation and returns the result:</p>
<p id="demo 1"></p>
<script>
function myFunction(p1, p2) {
  return p1 * p2;
}
let result = myFunction(4, 3);
document.getElementById("demo 1").innerHTML = result;
</script>
<h1>JavaScript Variables</h1>
<h2>Creating a Variable</h2>
<p id="demo 3"></p>

<script>
// Create and a Variable:
let car = "Fiat";
document.getElementById("demo 3").innerHTML = "Car: " +  car;
</script>
<h1>JavaScript Object Properties</h1>
<h2>Access a Property with .</h2>

<p id="demo 4"></p>

<script>
const person = {
  firstname: "John",
  lastname: "Doe",
  age: 50,
  eyecolor: "blue"
};

document.getElementById("demo 4").innerHTML = person.firstname + " is " + person.age + " years old.";
</script>
<h1>JavaScript Objects</h1>
<h2>Object Methods</h2>
<p>A method is a function definition stored as a property value.</p>

<p id="demo 5"></p>

<script>
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

document.getElementById("demo 5").innerHTML = person.fullName();
</script>
<h1>JavaScript Objects</h1>
<p>Displaying a JavaScript object will output [object Object]:</p>

<p id="demo 6"></p>

<script>
// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Display Object
document.getElementById("demo 6").innerHTML = person;
</script>
<h1>JavaScript Object Constructors</h1>

<p id="demo 7"></p>

<script>
// Constructor Function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create a Person object
const myFather = new Person("John", "Doe", 50, "blue");

// Display age
document.getElementById("demo 7").innerHTML =
"My father is " + myFather.age + "."; 
</script>
<h1>JavaScript HTML Events</h1>
<h2>The onclick Attribute</h2>

<button onclick="document.getElementById('demo').innerHTML=Date()">The time is?</button>

<p id="demo 8"></p>
<h1>JavaScript Strings</h1>

<p id="demo"></p>

<script>
let text = "John Doe";  // String written inside quotes
document.getElementById("demo 8").innerHTML = text;
</script>
<h1>JavaScript Strings</h1>
<h2>The length Property</h2>

<p>The length of the string is:</p>
<p id="demo 9"></p>

<script>
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("demo 9").innerHTML = text.length;
</script>
<h1>JavaScript Strings</h1>
<h2>The lastIndexOf() Method</h2>

<p>The position of the last occurrence of "locate" is:</p>

<p id="demo 10"></p>

<script>
let text = "Please locate where 'locate' occurs!";
let index = text.lastIndexOf("locate");
document.getElementById("demo 10").innerHTML = index;
</script>
<h1>JavaScript Template Strings</h1>
<p>Templates use back-ticks (``) to define a string:</p>

<p id="demo 11"></p>

<p>Templates are not supported in Internet Explorer.</p>

<script>
let text = `Hello world!`;
document.getElementById("demo 12").innerHTML = text;
</script>
<h2>JavaScript Numbers</h2>

<p>Numbers can be written with or without decimals:</p>

<p id="demo 13"></p>

<script>
let x = 3.14;
let y = 3;
document.getElementById("demo 14").innerHTML = x + "<br>" + y;
</script>
<h1>JavaScript Numbers</h1>
<h2>Integer Precision</h2>

<p>Integers (numbers without a period or exponent notation) are accurate up to 15 digits:</p>

<p id="demo 15"></p>

<script>
let x = 999999999999999;
let y = 9999999999999999;
document.getElementById("demo 15").innerHTML = x + "<br>" + y;
</script>
<h2>JavaScript Number Methods</h2>

<p>The toString() method converts a number to a string.</p>

<p id="demo 16"></p>

<script>
let x = 123;
document.getElementById("demo 16").innerHTML =
  x.toString() + "<br>" +
   (123).toString() + "<br>" +
   (100 + 23).toString();
</script>
<h1>JavaScript Numbers</h1>
<h2>The EPSILON Property</h2>

<p>The difference between 1 and the smallest floating point number greater than 1, in JavaScript is:</p>
<p id="demo 17"></p>

<script>
let x = Number.EPSILON;
document.getElementById("demo 17").innerHTML = x;
</script>
<h1>JavaScript Arrays</h1>

<p id="demo 18"></p>

<script>
const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo 18").innerHTML = cars;
</script>
<h1>JavaScript Arrays</h1>
<h2>The length Property</h2>

<p>The length property returns the length of an array:</p>

<p id="demo 19"></p>

<script>
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
document.getElementById("demo 19").innerHTML = size;
</script>
<h1>JavaScript Arrays</h1>
<h2>The indexOf() Method</h2>

<p id="demo 20"></p>

<script>
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;

document.getElementById("demo 20").innerHTML = "Apple is found in position " + position;
</script>
<h1>JavaScript Arrays</h1>
<h2>The sort() Method</h2>

<p>The sort() method sorts an array alphabetically:</p>

<p id="demo21"></p>
<p id="demo22"></p>

<script>
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo21").innerHTML = fruits;

fruits.sort();
document.getElementById("demo22").innerHTML = fruits;
</script>
<h1>JavaScript Arrays</h1>
<h2>The forEach() Method</h2>

<p>Call a function once for each array element:</p>

<p id="demo 23"></p>

<script>
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);
document.getElementById("demo 23").innerHTML = txt;

function myFunction(value, index, array) {
  txt += value + "<br>"; 
}
</script>
<h2>JavaScript const</h2>
<p id="demo24"></p>

<script>

const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo24").innerHTML = cars;

</script>
<h1>JavaScript Dates</h1>
<h2>Using new Date()</h2>
<p>new Date() without arguments, creates a date object with the current date and time:</p>

<p id="demo25"></p>

<script>
const d = new Date();
document.getElementById("demo25").innerHTML = d;
</script>
<h2>JavaScript ISO Dates</h2>

<p id="demo26"></p>

<script>
const d = new Date("2015-03-25");
document.getElementById("demo26").innerHTML = d;
</script>
<h1>JavaScript Dates</h1>
<h2>Using new Date()</h2>
<p>Create a new date object with the current date and time:</p>

<p id="demo27"></p>

<script>
const d = new Date();
document.getElementById("demo27").innerHTML = d;
</script>
<h2>JavaScript setFullYear()</h2>
<p>The setFullYear() method sets the year of a date object:</p>

<p id="demo28"></p>

<script>
const d = new Date();
d.setFullYear(2020);
document.getElementById("demo28").innerHTML = d;
</script>
<h2>JavaScript Math.PI</h2>

<p>Math.PI returns the ratio of a circle's circumference to its diameter:</p>

<p id="demo29"></p>

<script>
document.getElementById("demo29").innerHTML = Math.PI;
</script>
<h2>JavaScript Math.random()</h2>

<p>Math.random() returns a random number between 0 (included) and 1 (excluded):</p>

<p id="demo30"></p>

<script>
document.getElementById("demo30").innerHTML = Math.random();
</script>
<h1>JavaScript Booleans</h1>
<p>Display the value of Boolean(10 > 9):</p>

<p id="demo31"></p>

<script>
document.getElementById("demo31").innerHTML = Boolean(10 > 9);
</script>
<h1>JavaScript Comparison</h1>
<h2>The () ? : Ternary Operator</h2>

<p>Input your age and click the button:</p>

<input id="age" value="18" />

<button onclick="myFunction()">Try it</button>

<p id="demo32"></p>

<script>
function myFunction() {
  let age = document.getElementById("age").value;
  let voteable = (age < 18) ? "Too young":"Old enough";
  document.getElementById("demo32").innerHTML = voteable + " to vote.";
}
</script>
<h2>JavaScript if</h2>

<p>Display "Good day!" if the hour is less than 18:00:</p>

<p id="demo33">Good Evening!</p>

<script>
if (new Date().getHours() < 18) {
  document.getElementById("demo33").innerHTML = "Good day!";
}
</script>
<h2>JavaScript switch</h2>

<p id="demo34"></p>

<script>
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("demo34").innerHTML = "Today is " + day;
</script>
<h2>JavaScript For Loop</h2>

<p id="demo35"></p>

<script>
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

document.getElementById("demo35").innerHTML = text;
</script>
<h2>JavaScript For In Loop</h2>
<p>The for in statement loops through the properties of an object:</p>

<p id="demo36"></p>

<script>
const person = {fname:"John", lname:"Doe", age:25}; 

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}

document.getElementById("demo36").innerHTML = txt;
</script>
<h2>JavaScript For Of Loop</h2>
<p>The for of statement loops through the values of any iterable object:</p>

<p id="demo37"></p>

<script>
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x + "<br>";
}

document.getElementById("demo37").innerHTML = text;
</script>
<h2>JavaScript While Loop</h2>

<p id="demo38"></p>

<script>
let text = "";
let i = 0;
while (i < 10) {
  text += "<br>The number is " + i;
  i++;
}
document.getElementById("demo38").innerHTML = text;
</script>
<h2>JavaScript Loops</h2>

<p>A loop with a <b>break</b> statement.</p>

<p id="demo39"></p>

<script>
let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}

document.getElementById("demo39").innerHTML = text;
</script>
<h1>JavaScript Iterables</h1>
<h2>Iterate over a String</h2>

<p id="demo40"></p>

<script>
// Create a String
const name = "W3Schools";

// List all Elements
let text = ""
for (const x of name) {
  text += x + "<br>";
}

document.getElementById("demo40").innerHTML = text;
</script>
<h1>JavaScript Sets</h1>
<p>Create a set from an array:</p>

<p id="demo41"></p>

<script>
// Create a Set
const letters = new Set(["a","b","c"]);

// Display set.size
document.getElementById("demo41").innerHTML = "The set has " + letters.size + " values.";
</script>
<h1>JavaScript Sets</h1>
<p>Create a set from an array:</p>

<p id="demo42"></p>

<script>
// Create a Set
const letters = new Set(["a","b","c"]);

// Display set.size
document.getElementById("demo42").innerHTML = "The set has " + letters.size + " values.";
</script>
<h1>JavaScript Maps</h1>
<h2>The new Map Method()</h2>

<p>Creating a map from an array:</p>

<p id="demo43"></p>

<script>
// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

let numb = fruits.get("apples");
document.getElementById("demo43").innerHTML = "There are " + numb + " apples.";
</script>
<h1>JavaScript Maps</h1>
<h2>The new Map Method()</h2>

<p>Creating a map from an array:</p>

<p id="demo44"></p>

<script>
// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

let numb = fruits.get("apples");
document.getElementById("demo44").innerHTML = "There are " + numb + " apples.";
</script>

<h1>JavaScript Operators</h1>
<h2>The typeof Operator</h2>

<p>The typeof operator returns the type of a variable or an expression:</p>

<p id="demo45"></p>

<script>
document.getElementById("demo45").innerHTML = 
"'John' is " + typeof "John" + "<br><br>" +
"('John' + 'Doe') is " + typeof ("John" + "Doe") + "<br><br>" +
"3.14 is " + typeof 3.14 + "<br><br>" +
"33 is " + typeof 33 + "<br><br>" +
"(33 + 66) is " + typeof (33 + 66) + "<br><br>" +
"NaN is " + typeof NaN + "<br><br>" +
"true is " + typeof true + "<br><br>" +
"false is " + typeof false + "<br><br>" +
"1234n is " + typeof 1234n + "<br><br>" +
"Symbol() is " + typeof Symbol() + "<br><br>" +
"x is " + typeof x;
</script>
<h1>JavaScript Numbers</h1>
<h2>The Number() Method</h2>

<p>The Number() metod converts a variable (or value) into a number:</p>

<p id="demo46"></p>

<script>
document.getElementById("demo46").innerHTML =
Number("3.14") + "<br>" +
Number(Math.PI) + "<br>" +
Number("    ") + "<br>" +
Number("") + "<br>" +
Number("99 88") + "<br>" +
Number("John") + "<br>";
</script>
<h1>JavaScript Objects</h1>
<h2>Object Destructuring</h2>

<p id="demo47"></p>

<script>
// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// Destructuring
let {firstName, lastName} = person;

// Display Primitive Values
document.getElementById("demo47").innerHTML =
firstName + " " + lastName;
</script>
<h1>JavaScript Bitwise AND</h1>
<h2>The & Operator</h2>

<p id="demo48"></p>

<script>
document.getElementById("demo48").innerHTML = 5 & 1;
</script>
<h1>JavaScript String Methods</h1>
<p>Search a string for "W3Schools", and display the position of the match:</p>

<p id="demo49"></p>

<script>
let text = "Visit W3Schools!"; 
let n = text.search("W3Schools");
document.getElementById("demo49").innerHTML = n;
</script>
<h1>JavaScript Arithmetic</h1>
<h2>Operator Precedence</h2>
<p>Multiplication has precedence over addition.</p>

<p id="demo50"></p>

<script>
document.getElementById("demo50").innerHTML = 100 + 50 * 3;
</script>
<h2>JavaScript Error Handling</h2>

<p>How to use <b>catch</b> to display an error.</p>

<p id="demo51"></p>

<script>
try {
  adddlert("Welcome guest!");
}
catch(err) {
  document.getElementById("demo51").innerHTML = err.message;
}
</script>
<h2>JavaScript Scope</h2>

<p><b>carName</b> is undefined outside myFunction():</p>

<p id="demo52"></p>

<p id="demo53"></p>

<script>
myFunction();

function myFunction() {
  let carName = "Volvo";
  document.getElementById("demo53").innerHTML = typeof carName + " " + carName;
}

document.getElementById("demo53").innerHTML = typeof carName;
</script>
<p id="demo54"></p>

<script>
x = 5; // Assign 5 to x

elem = document.getElementById("demo54"); // Find an element 
elem.innerHTML = x;           // Display x in the element

var x; // Declare x
</script>
<h2>With "use strict":</h2>
<h3>Using a variable without declaring it, is not allowed.</h3>

<p>Activate debugging in your browser (F12) to see the error report.</p>

<script>
"use strict";
x = 3.14;  // This will cause an error (x is not defined).
</script>
<h1>The JavaScript <i>this</i> Keyword</h1>
<p>In this example, <b>this</b> refers to the <b>person</b> object.</p>
<p>Because <b>fullName</b> is a method of the person object.</p>

<p id="demo55"></p>

<script>
// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

// Display data from the object:
document.getElementById("demo55").innerHTML = person.fullName();
</script>
<h1>JavaScript Functions</h1>
<h2>The Arrow Function</h2>

<p>This example shows the syntax of an Arrow Function, and how to use it.</p>

<p id="demo56"></p>

<script>
let myFunction = (a, b) => a * b;
document.getElementById("demo56").innerHTML = myFunction(4, 5);
</script>
<h1>JavaScript Classes</h1>
<p>Creating two car objects from a car class:</p>

<p id="demo57"></p>

<script>
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);

document.getElementById("demo57").innerHTML =
myCar1.name + " " + myCar2.name;
</script>
<h1>JavaScript Modules</h1>

<p id="demo58"></p>

<script type="module">
import message from "./message.js";

document.getElementById("demo58").innerHTML = message();

</script>
<h2>Create Object from JSON String</h2>

<p id="demo59"></p>

<script>
let text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

const obj = JSON.parse(text);
document.getElementById("demo59").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName;
</script>
<h2>My First Web Page</h2>

<p>Activate debugging in your browser (Chrome, IE, Firefox) with F12, and select "Console" in the debugger menu.</p>

<script>
a = 5;
b = 6;
c = a + b;
console.log(c);
</script>
<h2>My Web Page</h2>

<p>The best place to break a code line is after an operator or a comma.</p>

<p id="demo60"></p>

<script>
document.getElementById("demo60").innerHTML =
"Hello Dolly.";
</script>
<h2>JavaScript Literal Constructors</h2>
<p id="demo61"></p>

<script>
let x1 = "";
let x2 = 0;
let x3 = false;
const x4 = {};
const x5 = [];
const x6 = /()/;
const x7 = function(){};

document.getElementById("demo61").innerHTML =
"x1: " + typeof x1 + "<br>" +
"x2: " + typeof x2 + "<br>" +
"x3: " + typeof x3 + "<br>" +
"x4: " + typeof x4 + "<br>" +
"x5: " + typeof x5 + "<br>" +
"x6: " + typeof x6 + "<br>" +
"x7: " + typeof x7 + "<br>";
</script>
<h2>JavaScript Comparisons</h2>

<p>This returns false (as expected) because x is not equal to 10:</p>

<p id="demo62"></p>

<script>
let x = 0;
document.getElementById("demo62").innerHTML = Boolean(x == 10);
</script>
<h2>JavaScript Performance</h2>

<p>If you expect to access a DOM element several times, access it once, and the use it as a local variable:</p>

<p id="demo63"></p>

<script>
const obj = document.getElementById("demo63");
obj.innerHTML = " Hello";
</script>

</body>
</html>
