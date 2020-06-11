import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Services:Observable';
  users:Array<any>;
  user:any;
  photos:any[];

   constructor(private service:UserService){  }
   ngOnInit(){

    this.service.filterUsers(3).subscribe(
      data=>{
         this.user = data;
         console.log(this.user)
      },
      err=>{
         console.log(err)
      },
      ()=>{
        console.log('Stream is completed')
      }
    );

    this.service.findAll().subscribe(
      data=>{
         this.users = data;
      },
      err=>{
         console.log(err)
      },
      ()=>{
        console.log('Stream is completed')
      }
    );
    //photo service
    this.service.fetchPhotos().subscribe(
      data=>{
         this.photos = data;
         console.log(this.photos)
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
