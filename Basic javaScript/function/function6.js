console.log(10 , "chandan,", 5.6);  // console.log is not a native js function, it is a method of console object

const date = new Date();
console.log(date);       // 2021-09-15T15:29:24.000Z
console.log(date.getDate());       // getdate() is a method of Date object, it returns the day of the month (from 1 to 31) for the specified date.
console.log(date.getDay());       // getDay() is a method of Date object, it returns the day of the week (from 0 to 6) for the specified date.
console.log(date.getFullYear());       // getFullYear() is a method of Date object, it returns the year for the specified date.
console.log(date.getHours());       // getHours() is a method of Date object, it returns the hour (from 0 to 23) for the specified date.
console.log(date.getMinutes());       // getMinutes() is a method of Date object, it returns the minutes (from 0 to 59) for the specified date.
console.log(date.getMonth());       // getMonth() is a method of Date object, it returns the month (from 0 to 11) for the specified date.
console.log(date.getSeconds());       // getSeconds() is a method of Date object, it returns the seconds (from 0 to 59) for the specified date.
console.log(date.getTime());       // getTime() is a method of Date object, it returns the number of milliseconds since midnight Jan 1, 1970.

// strings : in string, we can use single quotes, double quotes, and backticks to define a string.
let str = 'Hello World!';
let str0 = 'raju said " i dont have money" ';
let str1 = "Hello World!";
let str2 = `Hello World!`;
let str3 = `Hello World " what is this"  , i don't know`;
let x = 10;
let str4 = `The value of x is ${x}`; // tamplate string or string interpolation

console.log(str); 
console.log(str0);
console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);


// how to use "" , '', `` in a string
let str5 = 'He said "Hello"';
let str6 = "It's a beautiful day";
let str7 = `She said "It's a beautiful day"`;

console.log(str5);
console.log(str6);
console.log(str7);



let s1 = "hello \n  world"; // \n is used to add a new line
let s2 = " hello \t world"; // \t is used to add a tab space   
let s3 = " hello \\ world"; // \\ is used to add a backslash
let s4 = " ram is \"He is a nice boy\""; // \" is used to add a double quote    
let s5 = `hello his \` is not good`; // \` is used to add a backtick

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s5);


console.log(s1 + s2 + s3 + s4 + s5); // concatenation of strings: it is a process of joining two or more strings together to create a new string.

let firstname = "Chandan";

console.log(firstname.concat("^", "chturvedi")); // concat() is a method of string object, it is used to join two or more strings together to create a new string.

console.log(firstname.toUpperCase()); // toUpperCase() is a method of string object, it is used to convert a string to uppercase letters.
console.log(firstname.toLowerCase()); // toLowerCase() is a method of string object, it is used to convert a string to lowercase letters.


// hack 

let x1 = "hds"
let x2 = "udkjn"
let x3 = "djjh"

console.log(x1,x2,x3); // it is used to print multiple values in a single line.

let result = "";
result = result + x1 + x2 + x3;
console.log(result);  // in thishack we can print in dsa qustion multiple values in a single line.
