// SyntaxError: Unexpected token 'break'
// let break = 145;

// Not recommended: case-insensitive option
// let breaK = 145;
// console.log(breaK); // Output: 145

// Recommended: Use a different variable name instead of 'break'
// let breakValue = 145; // Use a different variable name instead of 'break'
// console.log(breakValue); // Output: 145

// Day 03: JavaScript Data Types (Primitive Types)

const auth = true; // Boolean : true or false
const userName = "John Doe"; // String : "John Doe", 'Jane Smith', "Alice Johnson"
const userAge = 30; // Number : 10, 20, 30, 40, 50
const userHeight = parseFloat("5.9"); // Number : 5.9, 6.1, 5.5
const userAddress = null; // Null : null // Explicitly assigned to indicate the absence of a value
let userPhone; // Undefined : undefined // Not yet assigned a value, so it is undefined
const tempValue = 25;
const tempScale = "°C";
const roomTemperature = `${tempValue}${tempScale}`; // String : "25°C"
let roomTempObject = {
  value: tempValue,
  scale: tempScale,
}; // Object : { value: 25, scale: "°C" }

// console.log("Auth ::", typeof auth, auth);
// console.log("UserName ::", typeof userName, userName);
// console.log("UserAge ::", typeof userAge, userAge);
// console.log("UserHeight ::", typeof userHeight, userHeight);
// console.log("UserAddress ::", typeof userAddress, userAddress);
// console.log("UserPhone ::", typeof userPhone, userPhone);
// console.log("RoomTemperature ::", typeof roomTemperature, roomTemperature);
// console.log("RoomTempObject ::", typeof roomTempObject, roomTempObject);

// Symbol example
const uniqueId = Symbol("id"); // Symbol : Symbol("id")
const anotherUniqueId = Symbol("id"); // Symbol : Symbol("id")

// console.log("Unique ID 1 ::", typeof uniqueId, uniqueId); // Unique ID 1 :: Symbol(id)
// console.log("Unique ID 2 ::", typeof anotherUniqueId, anotherUniqueId); // Unique ID 2 :: Symbol(id)
// console.log("Are the two symbols equal? ::", uniqueId === anotherUniqueId); // false

// BigInt example
const bigNumber = 12345678901234567890123456789012345; // BigInt : 1234567890123456789012345678901234567890n
const bigIntValue = 1234567890123456789012345678901234567890n; // BigInt : 1234567890123456789012345678901234567890n
// console.log("BigNumber Value ::", typeof bigNumber, bigNumber); // BigNumber Value :: Number(12345678901234567890123456789012345)
// console.log("BigInt Value ::", typeof bigIntValue, bigIntValue); // BigInt Value :: BigInt(1234567890123456789012345678901234567890)

// Displaying the types and values of the variables

// Non-primitive types (Reference types) in JavaScript

// Object example
const user = {
  name: "Alice",
  age: 28,
  isAdmin: true,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
  hobbies: ["reading", "traveling", "coding"],
};

// console.log("User Object ::", typeof user, user);

// Array example
const numbersArray = [1, 2, 3, 4, 5]; // Array : [1, 2, 3, 4, 5]
const fruitsArray = ["apple", "banana", "orange"]; // Array : ["apple", "banana", "orange"]
const listItems = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
]; // Array of objects : [{id: 1, name: "Item 1"}, {id: 2, name: "Item 2"}, {id: 3, name: "Item 3"}]
const mixedArray = [1, "two", true, null, undefined, { key: "value" }]; // Array : [1, "two", true, null, undefined, { key: "value" }]

// console.log("Numbers Array ::", typeof numbersArray, numbersArray);
// console.log("Fruits Array ::", typeof fruitsArray, fruitsArray);
// console.log("List Items Array ::", typeof listItems, listItems);

// No practical use of mixedArray, but just for demonstration purposes
// console.log("Mixed Array ::", typeof mixedArray, mixedArray);

// Function example
function greet(name) {
  return `Hello, ${name}!`;
}

// console.log("Greet Function ::", typeof greet, greet("Alice")); // Greet Function :: function Hello, Alice!
