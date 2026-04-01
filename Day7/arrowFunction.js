"use strict";
//Arrow function are also same as no name function
// In arrow function we dont use 'Function key word' we use ()=>
//Syntax:
/**
 *
 * let variable(parameter):void =>
 * {
 *
 *
 *
 * }
 */
let greet = () => {
    console.log('Hello');
};
greet();
//----------------------------------
let sum = (a, b) => {
    return a + b;
};
console.log(sum(35, 65));
//---------------------------
let multiply = (x, y) => x * y;
console.log('Multiple if 2* 3 is ', multiply(2, 3));
//Arrow function with defaul params
//____________________________________________________
let calculateDiscountArrow = (price, rate = 0.50) => {
    let discount = price * rate;
    console.log("Discount amount", discount);
};
calculateDiscountArrow(1000, .03);
//__________________________________________________
//Arrow with rest Params
let arrowRest = (...num) => {
    let i;
    let sum = 0;
    for (i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }
    console.log('sum of arrow funtio is ', arrowRest);
};
arrowRest(22.4, 877, 9, 653);
