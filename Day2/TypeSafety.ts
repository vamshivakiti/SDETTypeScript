let age=30;
//age='Thirty'//complite time error

console.log(age)

//null Vs undefined

let emtyValue:null=null;

let notAssigned:undefined=undefined;

console.log(emtyValue)
console.log(notAssigned)

let price:number;
//console.log(price)

//Any Type
//Loses the Typscript benefits

let value: any='Welcome'
console.log(typeof(value))
value=100;
console.log(typeof(value))
value=true;
console.log(typeof(value))

//Union
// Can store multiple dataTypes to single value
let id:String | number | boolean;
id=1234;
console.log(typeof(id))

//Functios, A group of statement which perform  a operation.

function sum(a:number,b:number):number{
   
  return(a+b)
}
let res=sum(29,40)
console.log(res)

