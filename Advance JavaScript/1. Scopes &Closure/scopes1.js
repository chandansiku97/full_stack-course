// javascripe is a hybrid language. It is a combination of both functional programming and object oriented programming.
// In javascript, we have two types of scopes: Global scope and Local scope.
// Global scope is the scope that is outside of all the functions. It is the default scope in javascript.
// javascrit is mix of compiled and interpreted language. It is compiled at runtime.


let product1 = {
    name: 'Laptop',
    price: 1200,
    company: 'Dell',
    warranty: "1 year",
    color : 'black'
    }


    const p = Object.keys(product1); // Object.keys() method returns an array of a given object's own property names, in the same order as we get with a normal loop.
    console.log(p);
    const q = Object.values(product1); // Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.
    console.log(q);

    // Q. what is Object heare ? 
    // Ans. Object is a global object in javascript. It is a constructor for creating objects. 
    //      It is a built-in object that has properties and methods for working with objects.

    const r= Object.entries(product1); 
    console.log(r); // output will be an array of arrays. Each sub-array will have two elements. First element will be the key and second element will be the value of the object.


    
// there are two imprtent mathed to make object immuteable
   // 1. Object.seal()
   // 2. Object.freeze() 


   // 1. Object.seal() : you cant add or delete any new key values pairs in the object. But you can update the existing key values pairs.
   // tum kisi bhi key value pair ko update kar sakte ho but new key value pair add nahi kar sakte ho. delete bhi nahi kar sakte ho.
   // ADD nhi hoga , delete nahi hoga, update hoga.

    const product = {name: "Iphone 14 prp", price: 125000}
    Object.seal(product);

    product.company = "apple"; // new addition not allowed
    console.log(product); // output will be {name: "Iphone 14 prp", price: 125000}

    delete product.price; // deletion of key values pair not allowed
    console.log(product); // output will be {name: "Iphone 14 prp", price: 125000}

    product.name = "Iphone 14 pro"; // updation allowed in the existing key value pair
    console.log(product); // output will be {name: "Iphone 14 pro", price: 125000}



    // 2. Object.freeze() : you cant add or delete any new key values pairs in the object. You cant update the existing key values pairs.
    // tum kisi bhi key value pair ko update bhi nahi kar sakte ho. delete bhi nahi kar sakte ho. new addition bhi nahi kar sakte ho.
    // ADD nhi hoga , delete nahi hoga, update bhi nahi hoga.

    const product2 = {name: "Iphone 14 prp", price: 125000}
    Object.freeze(product2);

    product2.company = "apple"; // new addition not allowed
    console.log(product2); // output will be {name: "Iphone 14 prp", price: 125000}

    delete product2.price; // deletion of key values pair not allowed
    console.log(product2); // output will be {name: "Iphone 14 prp", price: 125000}

    product2.name = "Iphone 14 pro"; // updation not allowed in the existing key value pair
    console.log(product2); // output will be {name: "Iphone 14 prp", price: 125000}



    //Object.isFrozen and Object.isSealed
    // if an object is sealed manually than it will only return true for isSealed and false for isFrozen 

    console.log(Object.isFrozen(product2)); // output will be true
    console.log(Object.isSealed(product)); // output will be true

    // example
    const x = {a: 1, b: 2, c: 3};
    Object.seal(x);
    console.log(Object.isFrozen(x)); 
    console.log(Object.isSealed(x));
    

    //  Object.preventExtensions
    // -> This method helps us to achieve 50% of what seal gives us.
    //      -> We cannot add new key value pairs
    //      -> We can remove existing key value pairs.
    //      -> Update is allowed.

    const product3 = {name: "Iphone 14 prp", price: 125000};
    Object.preventExtensions(product3);

    product3.company = "apple"; // new addition not allowed
    console.log(product3); // output will be {name: "Iphone 14 prp", price: 125000}

    delete product3.price; // deletion of key values pair allowed
    console.log(product3); // output will be {name: "Iphone 14 prp"}

    product3.name = "Iphone 14 pro"; // updation allowed in the existing key value pair
    console.log(product3); // output will be {name: "Iphone 14 pro"}


// Object.defineProperty 

// ye function bahut powerful hai. iska use karke hum kisi bhi object ke key value pair ko define kar sakte hain.
// ye function 3 parameters leta hai. 1. object, 2. key, 3. object of properties.
// ye function ek control deta hai ki hum kis tarah se kisi bhi key value pair ko define karna chahte hain.





const product4 = {name: "Iphone 14 prp", price: 125000};

//                   1. Object   2. Key   3. object of properties
Object.defineProperty(product4 , 'name', {configurable : false , writable: false});  
// This statement will make the 'name' key as non updatable and non deletable. But other keys like price can be updated and deleted as well.
// ab ye jo name key hai na hi oo update hosakta hai na hi oo delete ho sakta hai

product4.name = "chandan"; // that will not work
console.log(product4);


Object.defineProperty(product4, 'name', {configurable: false});
// This statement will make the 'name' key as non deletable but we can update it. But other keys like price can be updated and deleted as well.

delete product4.name; // not able to delete but

product4.name = "chandan";  // we can update name and other keys
console.log(product4); 



Object.defineProperty(product4, 'name', {writable: false});
//This statement will make the name key as non updatable but we can delete it. But other keys like price can be updated and deleted as well

product4.name = "chandan";  // we can't update name key but we can delete name key 
console.log(product4);

delete product4.name;
console.log(product4);

// configurable: false  -> means update kr sakte hai but delete nhi kar sakte hai 
// writable: false -> means delete kar sakte hai but update nhi kar sakte hai 
// configurable : false , writable: false -> means na updtae kr sakte hai na delete kar sakte hai 



