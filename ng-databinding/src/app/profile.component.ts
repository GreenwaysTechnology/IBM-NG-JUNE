import { Component, Input } from "@angular/core";


@Component({
    selector :'app-profile',
    template : `
       <h1>{{title}}</h1>
       <h2>{{mytitle}}</h2>
       <h2>{{address}}</h2>
    `
})
export class ProfileComponent{

    @Input()
    title:string;
    @Input('screen')
    mytitle:string;

    @Input()
    address


}