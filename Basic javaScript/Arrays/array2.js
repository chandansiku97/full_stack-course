// array is a collection of elements of any type of data. and this all are way to create an array in javaScript.

let arry = [1,2,3,6,7,8,1];

console.log(arry.length); // length is not a function it is a property

arry.push(10); // add element at the end of the array

console.log(arry);

arry.pop(); // remove element from the end of the array
console.log(arry);
arry.unshift(0); // add element at the beginning of the array
console.log(arry);
arry.shift(); // remove element from the beginning of the array  
console.log(arry);
arry.reverse(); // reverse the array
console.log(arry);
arry.sort(); // sort the array
console.log(arry);

arry.unshift(100);
console.log(arry.indexOf(100)); // find the index of the element

