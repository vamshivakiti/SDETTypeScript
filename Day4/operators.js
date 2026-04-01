"use strict";
let a = 10, b = 30;
//Arthemetic operatins +,-,%,/,* etc..
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);
//Assignement Operators:
// ==
a = 10;
b = 20;
a = a + b;
console.log(a += b);
console.log(a -= b);
console.log(a *= b);
console.log(a /= b);
console.log(a %= b);
//Relational Operators.
console.log('**************Relational Operator************');
//==,!=,===,>=,<=,>,<
//=== --> Strict eqaul to
console.log(a == b);
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
// Strict equality '==='
//diff between == and ===
let num1 = 10;
let num2 = '10';
console.log('---------------------');
console.log(num1 == num2); // not equality
console.log('Strict ==', num1 === num2); // Strick equality.
//Logical operator
//&& , || , ! -- return true or false
let b1 = true;
let b2 = false;
console.log(b1 && b2);
console.log(b1 || b2);
console.log(!b1);
console.log(!b2);
