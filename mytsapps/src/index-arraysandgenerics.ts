
//arrays

//syntax 1
let list:number[] = [1,2,3,4];
//syntax 2: generics : array of numbers
let numList:Array<number> =[1,23,45,89];

//complex array : array of Users

class User{
    id:number;
    name:string;
}
let users:Array<User> = [{id:1,name:"A1"},{id:2,name:"A2"},{id:3,name:"A3"}];
