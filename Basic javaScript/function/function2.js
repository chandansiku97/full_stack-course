function add(a, b=5 ,) { // default parameter function is used here that is b=5
    return a + b;
}

console.log(add(10)); 



function add1(a, b=5 , c) { // 
    console.log(a);
    console.log(b);
    console.log(c);
    return a + b + c;
}

console.log(add1(10, 55 , 3)); 