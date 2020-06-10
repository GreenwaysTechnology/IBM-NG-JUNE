import { Component } from '@angular/core';
import {USERS} from './mockdata/users';


@Component(
{
   selector:'app-root',
   templateUrl:'app.component.html'

})
export class AppComponent{

    //List
    numList:Array<number> = [1,2,3,4,5,6,7,8];
    
    //User List
    users:Array<any> = USERS;



}