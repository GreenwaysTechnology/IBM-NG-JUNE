import { NgModule } from '@angular/core';
import { GreeterComponent } from './greeter.component';


@NgModule({
    declarations:[GreeterComponent],
    imports:[],
    providers:[],
    exports:[GreeterComponent] //list of things will be available outside this module
})
export class GreeterModule{

}