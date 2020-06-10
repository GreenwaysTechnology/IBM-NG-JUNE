// type system

//Explicit type declaration
//strings
let firstName:string = "Subramanian";
console.log(`First Name ${firstName}`);
//firstName = 1000;
firstName = "Test";

//numbers
let stockValue:number =100;
stockValue =900;

//booleans
let isEnabled:boolean  =true;
isEnabled  =false;

////////////////////////////////////////////////////////////////////////////////
//implicit type declaration : Type inferance is enabled, based on initail value assigment
let age = 20;
console.log(`Age ${age}`)
age = 18;

//age = "hello"
let isActive= true;
//isActive = "test";
///////////////////////////////////////////////////////////////////////////////////

//here a can hold only numbers
let a:number =10;
//here b can hold only numbers
let b = 10;

//what if i want like javascript : a variable can hold any value during runtime

//any 
let c:any =10;
c="hello"
c=true;

//////////////////////////////////////////////////////////////////////////
//if you declare varible undefined after that if y assign any value,looks like any
let myvar;
//let myvar:any -->it is recommended declaration
myvar =10;
myvar ="hello"
myvar =true;

//if you declare variable with explicit undefined/null type and undefined/null value, no value 
//can be assigned
let myvar2:undefined = undefined;
//myvar2 ="test";
let myvar3:null =null;
//myvar3 ="test";






















