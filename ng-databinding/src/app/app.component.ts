import { Component } from '@angular/core';




@Component({
    selector: 'app-root',
    templateUrl:'app.component.html'
})
export class AppComponent{

    name:string = 'foo'
    message:string = "Hello"
    city:string = "coimbatore"

    //listener method
    onSave(){
        alert('Save is called!');
    }
    onUpdate(e:any){
        console.log(e.target.value);
      //update the name variable
      this.name =e.target.value
    }

   

}