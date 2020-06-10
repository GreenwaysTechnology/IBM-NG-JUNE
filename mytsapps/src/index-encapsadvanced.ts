

/**
class Order{
    //instancevariabe
    orderId:number;
    invoiceValue:number;
    productName:string;
    //localvariable
    constructor(orderId:number,invoiceValue:number,productName:string){
      this.orderId = orderId  ;
      this.invoiceValue = invoiceValue;
      this.productName = productName;
    }

}
 */
/** 
class Order{
    //instancevariabe
    constructor(public orderId:number=1,public invoiceValue:number=0,
        public productName:string='defaultProduct',private passcode:string='pass'){
      this.orderId = orderId  ;
      this.invoiceValue = invoiceValue;
      this.productName = productName;
    }
}
*/
class Order{
    //instancevariabe
    constructor(public orderId:number=1,public invoiceValue:number=0,
        public productName:string='defaultProduct',private passcode:string='pass'){
    }
}

let order = new Order(45,8999)
order.productName = 'Phone'
//order.password ='test'
console.log(order);