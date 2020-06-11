import { Component } from '@angular/core';
import { PostType } from './types/post.type';
import { PostFormModel } from './formmodels/post.form.model';



@Component({
    selector:'app-root',
    templateUrl :'app.component.html'
})
export class AppComponent{
 post:any
 submitted: boolean = false;
 categories:Array<string> = ["User interface","MicroServices","Devops"];
   constructor(){
    this.post = new PostFormModel(Math.random(), 'Learn Angular', 'Misko',this.categories[0]);
  }
  onSubmit(){
    console.log(this.post);
    this.submitted = true;
  }
}