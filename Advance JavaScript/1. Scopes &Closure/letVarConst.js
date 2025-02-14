/* More about  Var
   var helps us to declare function scoped or global scoped variables.
   Any variable is used only in two ways:

   RHS -> i.e. when we consume the variable
   LHS -> i.e. when we assign value or declare the variable
   For example:  
   
*/

var x = 99; // LHS - we are assigning it a value -- formal declration
console.log(x); // RHS - we are consuming the value of the variable

function fun() {
    console.log("the value of x here is",x); 
    var x = 10;
    console.log("the value of x here is",x);
   
   }
   fun();

   // phase 1 -> declration of all variable in memory in case of var