
//has-a and dependency injection(connect the object with object other projects)

class Product {
    constructor(public id:number=1,public name:string='default'){

    }
}
class Order{
   //has-a 
   constructor(public orderId:number=1,public product:Product=new Product()){

   }
}
//
let product = new Product(23,'Phone');

//dependency injection : object reference is bound with other objects
let order = new Order(3333,product);

console.log(order.orderId,order.product.name);


