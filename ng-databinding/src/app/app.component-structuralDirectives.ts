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

    //progress bar variables
    loading:boolean = true;
    status:string = 'Loading......'

    constructor(){
      //Progress bar time: using timer
      setTimeout(()=>{
        this.loading = !this.loading;
        this.status = 'Finished'
      },5000)

    }
    
    //User List
    users:Array<any> = USERS;
    //ngIf
    isHidden:boolean =false;
    isEnabled:boolean = false;

    //switch..case
    feedback:string = 'good';

    toggle(){
       this.isHidden  = !this.isHidden;
    }
   
    toogleEnabled(){
        this.isEnabled = !this.isEnabled;

    }


}