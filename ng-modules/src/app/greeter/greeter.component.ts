import { Component, OnInit } from '@angular/core';
import { GreeterService } from '../greeter.service';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styles: [
  ]
})
export class GreeterComponent implements OnInit {

  message:string;
  asyncMessage:string;
  constructor(private service:GreeterService) { }

  ngOnInit(): void {
    //call sync service
    this.message = this.service.sayHello();
    //call async service
    this.service.sayHai().subscribe(
      data=>{
         this.asyncMessage = data;
      },
      err=>{
         console.log(err)
      },
      ()=>{
        console.log('Stream is completed')
      }
    );

  }

}
