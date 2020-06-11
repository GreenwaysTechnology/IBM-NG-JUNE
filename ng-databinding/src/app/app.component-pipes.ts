import { Component } from '@angular/core';



@Component({
    selector :'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent{

    //date data
    today:any = new Date();
    someDay:any = new Date(1999,6,10);

    //currency data
    stockValue:number =100.7863;

    //strings
    name:string = 'subramanian';

    //User object
    user:any= {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        }
    };

}