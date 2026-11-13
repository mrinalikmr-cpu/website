// const = variable that cant be changed
const PI = 3.14; // here we const so tat it cant be changed anywhere else in code
let radius;     // undefined value take it as input
let circumference;

radius = window.prompt(' enter the radius of circle');
radius = Number(radius);

circumference = 2* PI* radius;
 
console.log(circumference);

// we use uppper case after cont only in primitive data type
// not in strings




//window.prompt() Behavior:
//User input gathered through window.prompt() 
// always returns data as a string, even if the user types a number. 
// That is why line 8 (Number(radius)) is crucial; without it, JavaScript would concatenate or treat the input as text instead of multiplying it mathematically.