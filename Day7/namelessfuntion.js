"use strict";
//No name or un named or nameless function
/**
 * let variable =function(parameter)
 * {
 *  function body
 *
 * }
 */
//EX 1
let msg = function () {
    return 'Hello world';
};
console.log(msg());
/// No name function with parameters
let mul = function (x, y) {
    return x * y;
};
console.log(mul(10, 20));
// No named rest parameter
let restNonmae = function (...num) {
    let i;
    let sum = 0;
    for (i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }
    console.log('sum of all numbers ', sum);
};
restNonmae(10, 22, 45, 87.8, 10);
