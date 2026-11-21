// Day 02: JavaScript Event Loop

// Micro Task 1
// console.log("Hello World!");

// Micro Task 2
// console.log("Start");

// JS Event Loop Example (Macro task)
/** 
 * This is a multiline comment
setTimeout(() => {
  console.log("Timeout Callback!");
}, 0);
*/

// Micro Task 3
// console.log("End");

// Day 02: JavaScript Variable Types

// Var Type
// var name = "John";
// var age = 30;

// console.log("1::", userEmail); // undefined
// var userEmail = "john@example.com";
// console.log("2::", userEmail); // john@example.com

// Let Type (ES6)

// log before initialization
// console.log("3::", city); // ReferenceError: Cannot access 'city' before initialization
// let city = "New York";

// let city = "New York";
// let zipCode = 10001;
// console.log("3::", city); // New York
// console.log("3::", zipCode); // 10001
// city = "Los Angeles";
// console.log("4::", city); // Los Angeles

// Const Type (ES6)
// const country; // Uncaught SyntaxError: Missing initializer in const declaration
// const country = "USA";
// console.log("5::", country); // USA
// country = "Canada"; // This will throw an error because const variables cannot be reassigned

// Day 02: JavaScript Variable Scopes

// // Global Scope
// let email = "hashan@test.com";

// // Function Scope
// function printEmail() {
//   email = "hashan34@gmail.com";
//   console.log("My Email :: 2", email);

//   // Block Scope
//   if (email === "hashan34@gmail.com") {
//     let email = "hashan88@hotmail.com";
//     console.log("My Email :: 3", email); // My Email
//   }
// }

// // Global Scope
// console.log("My Email :: 1", email);

// printEmail(); // My Email

// // Function Scope Example with var
// function varExample() {
//   var x = 10;

//   // Block Scope (but var does not respect block scope)
//   if (true) {
//     var x = 20; // Overwrites the x declared above!
//     console.log(x); // Outputs: 20
//   }

//   console.log(x); // Outputs: 20 (The inner block changed it globally/function-wide)
// }

// // varExample();

// // Function Scope Example with let
// function letExample() {
//   let x = 10;

//   if (true) {
//     let x = 20; // A brand new variable, local only to this block
//     console.log(x); // Outputs: 20
//   }

//   console.log(x); // Outputs: 10 (The original x remains untouched)
// }

// letExample();

// Global Scope
// var email = "hashan@test.com";

// // Function Scope
// function printEmail() {
//   email = "hashan34@gmail.com";
//   console.log("My Email :: 2", email);

//   // Block Scope
//   if (email === "hashan34@gmail.com") {
//     email = "hashan88@hotmail.com";
//     console.log("My Email :: 3", email); // My Email
//   }

//   console.log("My Email :: 4", email);
// }

// // Global Scope
// console.log("My Email :: 1", email);

// printEmail(); // My Email

// function personInfo() {
//   var myAge = 25; // Global variable
//   var myAge = 30; // Redeclaring the variable in the same scope
//   console.log("My Age ::", myAge); // Outputs: 30
// }

// personInfo();

// Uncaught SyntaxError: Identifier 'myAge' has already been declared
// function personInfo() {
//   let myAge = 25; // Global variable
//   let myAge = 30; // Redeclaring the variable in the same scope
//   console.log("My Age ::", myAge); // Outputs: 30
// }

// personInfo();

// Uncaught SyntaxError: Identifier 'myAge' has already been declared
// function personInfo() {
//   const myAge = 25; // Global variable
//   const myAge = 30; // Redeclaring the variable in the same scope
//   console.log("My Age ::", myAge); // Outputs: 30
// }

// personInfo();

// console.log("My Age ::", myAge); // Outputs: 30

// var myAge = 25; // Global variable
