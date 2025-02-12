// Can we make our own Object.seal ?

function customSeal(obj){
     let  keys = Object.keys(obj);
     for(let i = 0; i < keys.length; i++){
        Object.defineProperty(obj , keys[i], {configurable: false}); // this will make all the keys non deletable.
     }
        Object.preventExtensions(obj); // this will prevent the addition of new key value pairs.
}

// Can we make our own Object.frees ? 

function customfreze(obj){
     let  keys = Object.keys(obj);
     for(let i = 0; i < keys.length; i++){
        Object.defineProperty(obj , keys[i], {configurable: false , writable: false}); // this will make all the keys non deletable and non updatable.
     }
        Object.preventExtensions(obj); //   this will prevent the addition of new key value pairs.
}



// var, Let and const
// -> var is function scoped and globle scoped and let and const are block scoped.
// in function scope, the variable is accessible throughout the function.
// in block scope, the variable is accessible only within the block.

// write a example to show the difference between var , let and const
let a = 10;
var b = 20;
const c = 30;

{
    let a = 40;
    var b = 50;
    const c = 60;
    console.log(a); // output will be 40
    console.log(b); // output will be 50
    console.log(c); // output will be 60
}

