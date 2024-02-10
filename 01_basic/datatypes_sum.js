//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
console.log(typeof myFunction)

// https://262.ecma-international.org/5.1/#sec-11.4.3

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack (primitive datatypes) => call by value
// heap (non primitive datatypes) => call by referencing

// example 1
let Name = "ravi"
let nme = Name;
nme = "Subham"
console.log(Name)
console.log(nme)   // the value of Name variable does not change because it is maintained in stack and a copy of it is assigned to nme variable.

// example 2
let x = {
    email : "ravi@gmail.com",
    age : 45
}
let y = x;
y.email = "ravi2002@gmail.com"
console.table([x.email,y.email]) // both give same result because NP datatypes stored in heap hence the value of x and y in stack is referenced by heap value stored