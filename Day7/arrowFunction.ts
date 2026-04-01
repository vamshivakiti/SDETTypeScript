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

let greet =():void=>{
 console.log('Hello')
}

greet()
//----------------------------------
let sum=(a:number, b:number):number=>{
    return a+b
}

console.log(sum(35,65))
//---------------------------
let multiply=(x:number,y:number):number=>x*y
console.log('Multiple if 2* 3 is ',multiply(2,3))
//Arrow function with defaul params
//____________________________________________________
let calculateDiscountArrow=(price:number, rate:number=0.50)=>
    {
    let discount:number=price*rate
    console.log("Discount amount",discount);
}
calculateDiscountArrow(1000,.03)
//__________________________________________________
//Arrow with rest Params
let arrowRest=(...num:number[])=>{
let i;
let sum:number=0;
for(i=0;i<num.length;i++){
    sum=sum+num[i]
}
console.log('sum of arrow funtio is ',arrowRest)
}

arrowRest(22.4,877,9,653)

