//Variable: A variable is a container which can hold some data.
// var vS Let vS const..
/**
 * 1) scope
 * 2)Declaration
 * 3) Re-Declaration
 * 4) Re-initialization/Re-assignment
 * 5) Hosting
 */
//1)Var: Var is functional Scope, let and const block scope.
// ex 1 : var (FUnctonal scope)
function varscope(){
if(true){
  var msg='Hello World';
  //console.log(msg)
}
console.log(msg)
}
varscope();
// Exxample 2-let and const block scope:
function blockScope(){
if(true){
  let msg='Hello World'
  const greet='How are you'
  console.log(msg)
  console.log(greet)
}
//console.log(msg)-- out of block not accessed
//console.log(greet)
}
blockScope();

//ex;
//--------------
function scopeDiff(){
if(true){
    // var num1 =10;
    // let num2 =20;
    // const num3=30

    // console.log(num1)
    // console.log(num2)
    // console.log(num3)
}
//console.log(num1)
}
scopeDiff()
//-----------------------------

//Declaration:
// var can declared first and initialized later
//ex:
var x; // declaration
console.log(x)
x=10; // initialization.

// Let , can also declared with out initilization.
//ex
let y;
y=20;
console.log(y)
//const: initilization and declaration done in the same time
// const z; //Error
const z = 30;
//--------------------------------------------------

// RE declaration.
//Var allows redeclaration, let and const not allowed.
//EX:
var city='Delhi'
var city='Hyd'

console.log('updated to :',city)//out put -Hyd

let fruit= 'Apple'
//let fruit ='Mango'  - Not allowed

const color='red'
//const color='Yellow' -- Not allowed.
//---------------------------------------------------
// Re - initilization
//Var and Let allow, const - not allowed
//ex;

var car='Jeep'
car = 'Maruthi' // allowed

let car1='Nexa'
car1='Toyota' // allowed

const car2 ='Benz'
// car2='audi'// Not allowed
//------------------------------------------------------
//Hosting
//ex
// console.log(a);
// var a=10;
// console.log(a);

