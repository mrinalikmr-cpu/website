// arithmetic operators = operands ( values , variable,etc.)
// operators ( + - * /)
// ex 11 = X+ 5  x 11 5 are operand 


let student = 6;
// if we have to change the value of student
//student = student + 1;
// student = student *2;
//  student = student +2 
// student = student ** 2; //** student pa power 2 */
student = student % 2 // gives remainder
console.log(student);
//  we can also write by using operator
let marks =4;
marks += 2;
marks -= 5
marks++ ;
console.log(marks);

// operator precedence
// 1 {}; exponent; multiplication division modulo , + -
let result = 1 +3 *4 -1 %4;
console.log(result); // using