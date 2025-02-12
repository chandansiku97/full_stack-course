let s1 = 3;
let s2 = 4;
let s3 = 5;

// we all know about the triangle, the sum of two sides of a triangle is always greater than the third side.
// so we can use this logic to check the triangle is valid or not.
// if the sum of two sides is greater than the third side then it is a valid triangle.
// so we can write a function to check the triangle is valid or not.

if(s1+s2 > s3 && s2 +s3 > s1 && s1+s3> s2){
    console.log('This is a valid triangle');

}else{
    console.log('This is not a valid triangle');
}


// right algle traingle

let s4 = 3;
let s5 = 4;
let s6 = 5;

if(s4**2 + s5**2 === s6**2){
    console.log('This is a right angle triangle');

}else{ 
    console.log('This is not a right angle triangle');
}