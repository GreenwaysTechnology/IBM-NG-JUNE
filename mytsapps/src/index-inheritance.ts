//interface : generic class can be used with any class implementations.

interface CalculateInterest{
    calculateInterest():number;
}

//inheritance
abstract class Account implements CalculateInterest{
     constructor(){
         console.log('Account class')
     }
//  //override
  public calculateInterest():number{
       return 10;
  }
  //abstract methods
  abstract withdraw():number;
}
class SavingsAccount extends Account{
    constructor(){
        super();
      console.log('Savings account')
    }
  //overriding(method definining)
  public calculateInterest():number{
    return 100 * super.calculateInterest();
  }
  withdraw(){
      return 1000;
  }
}
let sb = new SavingsAccount();
console.log(sb.calculateInterest());