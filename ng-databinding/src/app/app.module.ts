import { NgModule } from '@angular/core';
//import { AppComponent ,ParentComponent,ChildComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProfileComponent } from './profile.component';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HighLightDirective} from './directives/app.highlight.directive';



@NgModule({
  //di list: ng wil lookup this list , and create objects and link accordingly
  //declarations:[AppComponent,ProfileComponent,ParentComponent,ChildComponent],
  declarations : [AppComponent,HighLightDirective],
  imports : [BrowserModule ,FormsModule],
  providers: [],
  ///entry point
  bootstrap: [AppComponent]

})
export class AppModule{}