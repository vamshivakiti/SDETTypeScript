"use strict";
//Function is a block of code which ca specific tasks
// They can be called when
//three types of function 
// 1) Named Function 
// 2) Name less / Ananamous Function
// 3) Arrow function or Lambda function
// 1) Named Function
// function nameOfFunction():return type{
// Block of code
// }
//EX:  
//Named function with no parameter and no return type
function nameOfFunc() {
    console.log('named Function');
}
nameOfFunc();
//---------------------------------------------
// named function with params and retrun value
function addNumber(x, y) {
    return x + y;
}
// No name funtion or ananamusfunction
// let result :number=addNumber(10,30)
// console.log(result)
console.log(addNumber(10, 20));
//---------------------------------------------
//Named function with rest parameter// Method overloading in java
function addNumbers(...nums) {
    let i;
    let sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log('sum of all numbers ', sum);
}
addNumbers(100, 300, 6, 44);
addNumbers(100, 340);
function findElements(...elements) {
    return elements.length;
}
console.log(findElements('ee', 12, 44, 'kk'));
//Named function with optional parameters
function displayDetails(id, name, mailId) {
    console.log('ID', id);
    console.log('Name', name);
    console.log('mailsID', mailId);
}
displayDetails(101, 'Kumar', 'Kumar@mail.com');
displayDetails(102, 'Ravi');
displayDetails(103, 'Ramy', 'Ramu@gmail.com');
displayDetails(104, 'test@mail.com');
//Named unction with default parameters
//Ex;
function calculateDiscount(price, rate = 0.50) {
    let discount = price * rate;
    console.log("Discount amount", discount);
}
calculateDiscount(1000, .03);
calculateDiscount(100); // If we not give rate value it will take default value as 0.50
