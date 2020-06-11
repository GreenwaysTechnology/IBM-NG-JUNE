import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GreeterService {

  constructor() { }
  
  //apis
  //sync 

  public sayHello():string{
    return 'Hello';
  }
  //async api using Rxjs Observable
  public sayHai():Observable<string>{
      //wrap the data inside observable
      return of('Hai'); //create Observable and return data
  }



}
