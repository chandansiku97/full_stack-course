// Named function expression
// A function expression with a name attached to it is called as named function expression.

const greet = function greet() { // named function expression
    console.log('Hello, World!');
}

// Anonymous function expression
// A function expression without a name is called as anonymous function expression.

const greet1 = function () { // anonymous function expression  -> theree is no name attached to it
    console.log('Hello, World!');
}


// Arrow function
// Arrow functions are the new way of writing function expressions in JavaScript. They are more concise and easier to read.

const greet3 = () => { // arrow function firts way
    console.log('Hello, World!');
}

const cube = (n) => { // arrow function second way
    return n * n * n;
}

const Sqr = n =>{ // arrow function third way
    return n * n ;
}

const arra = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sqr1 = x => x * x; // arrow function fourth way
arra.map(x => x * x); 

