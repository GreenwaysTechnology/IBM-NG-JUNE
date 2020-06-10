
//decorator declaration
// function Course(target:any){
//   //decorator logic : course name
//   Object.defineProperty(target.prototype,"subject",{
//       value:'Typescript'
//   });

// }
//syntax

function Course(subject:string){
    //decorator logic : course name

    return function(target:any){
        Object.defineProperty(target.prototype,"subject",{
            value:subject
        });
    }
    
  
}
//attach decorator on class
class StudentType{
    name:string;
    subject:string;
}

@Course('React and Node')
//@Course({subject:'test',courseId:'',duration:5})
class Student{
    constructor(public name:string="default"){}
}
//student details
//let student = new Student("Subramanian") as StudentType;
let student = new Student("Subramanian") as any;
console.log(`${student.name} is learning ${student.subject}`);




