// Arithmetic Operators
let a = 10;
let b = 5;
console.log('Addition:', a + b); // 15  
console.log('Subtraction:', a - b); // 5
console.log('Multiplication:', a * b); // 50
console.log('Division:', a / b); // 2
console.log('Modulus:', a % b); // 0

// Comparison Operators
console.log('Equal:', a == b); // false
console.log('Not Equal:', a != b); // true
console.log('Strict Equal:', a === b); // false
console.log('Strict Not Equal:', a !== b); // true
console.log('Greater Than:', a > b); // true
console.log('Less Than:', a < b); // false

// Logical Operators
let x = true;
let y = false;
console.log('AND:', x && y); // false
console.log('OR:', x || y); // true
console.log('NOT:', !x); // false

// Assignment Operators
let c = 20;
c += 10; // c = c + 10
console.log('c += 10:', c); // 30
c -= 5; // c = c - 5
console.log('c -= 5:', c); // 25

// Increment and Decrement Operators
let d = 5;
console.log('Increment:', ++d); // 6
console.log('Decrement:', --d); // 5


// Short-circuiting
let e = 0;
let f = 10;
console.log('Short-circuit AND:', e && f); // 0
console.log('Short-circuit OR:', e || f); // 10