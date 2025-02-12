// in javascript function is a first class citizen
// function can be passed as an argument to another function
// function can be returned from another function

function somefunction() {
   // computation
    return function x() {
        return 10;
    }
}


function anotherFunction(f1) { // f1 is a function
    f1();
    console.log("called f1");
   
}

function hello() {
    console.log("Hello");
}

anotherFunction(hello); // hello is a function and it is passed as an argument to anotherFunction
//diff between function call and function passed as an argument is that in function call we use () and in function passed as an argument we don't use ().