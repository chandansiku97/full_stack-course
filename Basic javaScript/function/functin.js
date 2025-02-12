// Function to add two numbers
function add(a, b) {
    console.log(`Adding ${a} and ${b}`);
    return a + b;
}


const result = add(2, 3);
console.log(result); // Output: 5



function gretingsForEveryone() {
       console.log('Hello Everyone');
       console.log("good morning");
       console.log("good afternoon");
       console.log("good evening");

}

gretings = gretingsForEveryone();


// Function to greet a specific person
function greetPerson(name) {
    console.log(`Hello, ${name}!`);
    console.log("Good morning");
    console.log("Good afternoon");
    console.log("Good evening");
}

greetPerson("Chandan");


function IsEevenOrOdd(num) {  //  num is a parameter of the function IsEevenOrOdd 
    if (num % 2 === 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
}

IsEevenOrOdd(5); // 5 is an argument passed to the function IsEevenOrOdd

function Multiply(a, b) {  // a and b both expected input of the function Multiply
          console.log(`Multiplying ${a} and ${b}`, a * b);   

}

Multiply(2, 3); // 2 and 3 both are actual values passed to the function Multiply



// Function to handle multiple arguments
function handleMultipleArguments(...args) {
    console.log('Handling multiple arguments:');
    args.forEach((arg, index) => {
        console.log(`Argument ${index + 1}: ${arg}`);
    });
}

handleMultipleArguments(1, 'hello', true, null, { key: 'value' });