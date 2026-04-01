"use strict";
//If else Condition********************
// let age:number =1;
// if(age>=18){
//     console.log('elegible for vote')
// }
// else{
//    console.log( 'not elegible')
// }
//
// let input =20;
// if(input % 2==0){
//     console.log(input +' is Even')
// }
// else{
//     console.log(`${input} is Odd`)
// }
// Nested if-else
let marks = 11;
if (marks > 0) {
    //Nested If
    if (marks >= 90) {
        console.log("A grade");
    }
    else if (marks >= 80 && marks <= 89) {
        console.log("b grade");
    }
    else if (marks >= 60 && marks <= 79) {
        console.log("c grade");
    }
    else {
        console.log("D grade");
    }
}
else {
    console.log('Enter Positive number');
}
//Switch Case Statement
//switch (expression)
let name1 = 'Ravi';
switch (name1) {
    case 'vamshi':
        console.log("This is Vamshi");
        break;
    case 'Rahul':
        console.log("This is Rahul");
        break;
    case 'Ramu':
        console.log("This is Ramu");
        break;
    default: console.log('No one');
}
