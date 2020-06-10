import { Component,EventEmitter, Output } from '@angular/core';



@Component({
    selector: "app-parent",
    template :`
        <div>
            <h1>Parent Component</h1>
            <hr>
            <h2>Messsage From Child : {{message}}</h2>
            <app-child (onSendRequest)="onUpdate($event)" ></app-child>
        </div>
     `
})
export class ParentComponent{

    message : string;

    onUpdate(e:any){
       //alert('Parent Message' + e);
       this.message = e;
    }
}

@Component({
    selector: "app-child",
    template: ` 
       <h1>Child Component</h1>
    <button class="btn btn-success" (click)="sendData()">Send Data to Parent</button>
 `

})
export class ChildComponent{

    //message to be sent to parent
    message:string = "Hello I am from Child!";

    //custom event: user defined event
    @Output()
    onSendRequest = new EventEmitter<string>();

    sendData(){
     alert('Sending data to Parent');
      this.onSendRequest.emit(this.message)
    }

}





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