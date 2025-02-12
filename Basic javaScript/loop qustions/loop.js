// waht is loop in javaScript?
// A loop is a programming structure that repeats a sequence of instructions until a specific condition is met. 
// In JavaScript, there are several types of loops, including for, while, and do-while loops. Loops are used to
//  automate repetitive tasks and iterate over data structures such as arrays and objects.


// This loop will print numbers from 1 to 5, 
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// While loop that prints numbers from 1 to 5
let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}

// Do-while loop that prints numbers from 1 to 5
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);

// For-in loop to iterate over properties of an object
const obj = {a: 1, b: 2, c: 3};
for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(`${key}: ${obj[key]}`);
    }
}

// For-of loop to iterate over elements of an array
const arr = [1, 2, 3, 4, 5];
for (const value of arr) {
    console.log(value);
}