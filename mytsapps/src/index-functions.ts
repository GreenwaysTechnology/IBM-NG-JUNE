//functions : normal ,arrow functions

//first function

function sayHello(){
    console.log('hello')
}
sayHello();
///function with parametes and args

//normal javascript function
// function add(a,b){
//  let c = a + b;
//  console.log(`The Add Result  ${c}`);
// }

//add type ; args type
function add(a:number,b:number){
    let c = a + b;
    console.log(`The Add Result  ${c}`);
}
add(10,10);
//add("test","hello");
//add(); // undefined,undefined
//what if the programmer is not passing input
//default args
function substract(a:number=0,b:number=0){
    let c = a - b;
    console.log(`The Substract Result  ${c}`);

}

//optional arg
function substract1(a?:number,b?:number){
    let c = a - b;
    console.log(`The Substract1 Result  ${c}`);

}
substract(10,2);
//not passed any thing
substract();

substract1();
////////////////////////////////////////////////////////////////////////////////

//return types

//default retun type is void(undefined)
function sayGreeter():void{
    console.log('test')
}
//here return type is decided by return values, if it is number,type would be no
function getStockValue(){
    return 10;
}
//here return type is very strict
function getQty():number{
    return 100
}
sayGreeter()
getQty()
getStockValue();
///////////////////////////////////////////////////////////////////////////////////
let getMydetails = (name?:string,age:number=18):string => 
{
   return `Name ${name} age ${age};`
}
console.log(getMydetails('Subramanian',39));

