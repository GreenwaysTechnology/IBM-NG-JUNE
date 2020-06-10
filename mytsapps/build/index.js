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
var Order = /** @class */ (function () {
    //instancevariabe
    function Order(orderId, invoiceValue, productName, passcode) {
        if (orderId === void 0) { orderId = 1; }
        if (invoiceValue === void 0) { invoiceValue = 0; }
        if (productName === void 0) { productName = 'defaultProduct'; }
        if (passcode === void 0) { passcode = 'pass'; }
        this.orderId = orderId;
        this.invoiceValue = invoiceValue;
        this.productName = productName;
        this.passcode = passcode;
    }
    return Order;
}());
var order = new Order(45, 8999);
order.productName = 'Phone';
//order.password ='test'
console.log(order);
