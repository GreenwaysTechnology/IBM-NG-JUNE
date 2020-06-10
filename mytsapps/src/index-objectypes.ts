


//literal objects
//class as type

class EmployeeType{
  //required properties
  id:number;
  name:string;
  //optional properties
  city?:string;
  state?:string;
  salary?:number;
}

let emp:EmployeeType = {
    id:1,
    name:'Subramanian'
    //name:3434
};

let emp1:EmployeeType = {
    id:1,
    name:'Subramanian',
    salary:8999
    //name:3434
};

//interface as type
interface  AccountType{
    id:number;
    name:string;
    balance?:number;
}
let sb:AccountType ={
    id:1,
    name:'Test',
    balance:20
}

let loanaccount:AccountType ={
    id:1,
    name:'Test',
    balance:20
}
//type

type CustomerType = {
    id:number,
    name:string;
    city?:string;
};
let cust:CustomerType = {
   id:1,
   name:"Customer",
   city : 'Coimbatore'
}