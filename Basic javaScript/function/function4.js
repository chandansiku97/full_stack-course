function sum(...numbers) {  // rest parameter is used to represent an indefinite number of arguments as an array.
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3)); 
console.log(sum(4, 5, 6, 7));
console.log(sum(4, 5, 6, 7, 8,6,4)); 