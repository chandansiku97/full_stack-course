console.log(30 && 40);  //if the first operand is truthy, the second operand is returned.
console.log(0 && 50);  //if the first operand is falsy, it is returned. The second operand is ignored.
console.log(0 && null); 
console.log("" && -0); 


console.log(30 || 40); //if the first operand is truthy, it is returned. The second operand is ignored.
console.log(0 || 50); //if the first operand is falsy, the second operand is returned.
console.log(0 || null);
console.log("" || -0);  //if the first operand is falsy, the second operand is returned.
console.log(undefined || 30); //if the first operand is falsy, the second operand is returned.
