// variable declaration

//es 5 style
//var -keyword
//firstName variable
//"Subramanian" is literal
//var firstName="Subramanian";
//string literal
let firstName = "Subramanian";
let lastName = 'Murugan'
//console.log("First Name" + firstName);
console.log(`First Name ${firstName} ${lastName}`);
let title = 'IBM'
let htmlPage =`
    <html>
      <head>
       <title>
          ${title}
       </title>
     </head>
     <body>
      <h1>Welcome</h1>
     </body>
     </html>
`;
console.log(htmlPage);

//numbers : 64 bit size: aka double
let stockValue =1000;
console.log(`Stock value ${stockValue}`);
//undefined
let qty;
console.log(`Qty ${qty}`)
//NaN : it is runtime numerical errors
let totalStockValue = qty * stockValue;
console.log(`Total Stock value ${totalStockValue}`);
let avgStock = stockValue/ 0;
//div /0 : infinity
console.log(`Average Stock value ${avgStock}`);

//booleans
let isActive = true;
let isEnabled =false;

if(isActive){
    console.log('Active')
}else{
    console.log('It is not active')
}

if(isEnabled){
    console.log('isEnabled')
}else{
    console.log('It is not Enabled')
}
//advanced booleans ;
//in js everthing is true exepect the following values
/**
 * falsy values
 * 1.boolean false
 * 2.0
 * 3.undefined
 * 4.NaN
 * 5.null
 * 6.empty string ""/ ''
 */

let message=""; // undefined

if(message){
    console.log('You have message')
}else{
    console.log('You dont have message')
}
//function
let myfunc = function(){
    console.log('myfunc')
};
myfunc();

//null
let employee = null;

//object typel̥
let customer = {
    id:1,
    name:'subramanian'
};

//typeof operator : is used to know the type of varibles
console.log('type vertifications')
console.log(typeof firstName);
console.log(typeof stockValue);
console.log(typeof qty);
console.log(typeof totalStockValue); //NaN
console.log(typeof avgStock); //inifnity
console.log(typeof isEnabled);
console.log(typeof employee);
console.log(typeof customer);
console.log(typeof myfunc);













