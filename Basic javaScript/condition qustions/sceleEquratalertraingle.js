// equlatral taingle is a triangle with all three sides are equal. example of equlatral triangle is 5,5,5
// scalen traingle is a triangle with all three sides are different and example of scalen triangle is 3,4,5
//  isosceles triangle is a triangle with two sides equal and one side different. example of isosceles triangle is 5,5,6

let a =7;
let b =8;
let c =9;

if(a === b && b === c){
    console.log('This is a equlatral triangle');    

}else if(a === b || b === c || c === a){
    console.log('This is a isosceles triangle');
} else{ 
    console.log('This is a scalen triangle');
}