//class

//state intialization
// class Employee{
//  //instance variables and methods
//  //direct: hardcoded
//  id:number =1;
//  name:string ='Subramanian'
//  //add methods

//  calculateSalary(salary:number=0,noofdays:number=0):number{
//     return salary * noofdays;
//  }

// }

// class Employee{
//     //instance variables and methods
//     //direct: hardcoded
//     id:number =1;
//     name:string ='Subramanian'
//     //add methods
   
//     calculateSalary(salary:number=0,noofdays:number=0):number{
//        return salary * noofdays;
//     }
   
// }

class Employee{
        //instance variables and methods
        //direct: hardcoded
        id:number ;
        name:string; 

        constructor(id:number=1,name?:string){
            this.id = id;
            this.name = name;
        }
        //add methods
               calculateSalary(salary:number=0,noofdays:number=0):number{
           return salary * noofdays;
        }
       
    }




let emp = null;

emp = new Employee(); //no values are passed
//after object creation
console.log(emp);
console.log(emp.calculateSalary(100,10));

emp = new Employee(2,'Karthik'); // values are passed
//after object creation
console.log(emp);
console.log(emp.calculateSalary(100,20));


emp = new Employee(4,'John'); // values are passed
//after object creation
console.log(emp);
console.log(emp.calculateSalary(100,20));