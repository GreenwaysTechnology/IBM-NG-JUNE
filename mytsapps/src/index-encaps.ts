
class Customer{
    //default public
   id:number =1;
   //explict public
   public name:string ='customer';
   //private 
   private invoice:number =1000;

   //default public methods
   calculateInvoice() : number{
       return this.invoice;
   }
   //implicit public methods
   public calculateInvoice1() : number{
    return this.invoice;
   }
   private calculateInvoice2() : number{
    return this.invoice;
   }
}

let cust = new Customer();

console.log(cust.id,cust.name);
//console.log(cust.invoice);
//console.log(cust.calculateInvoice2());