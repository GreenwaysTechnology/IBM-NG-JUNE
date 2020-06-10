import { Directive, ElementRef, HostListener,Input} from '@angular/core';

@Directive({
    selector : '[appHighlight]'
})
export class  HighLightDirective{ // implements OnInit{

    @Input()
    highlightColor: string;

    //element will point on which dom element this directive attached
    constructor(private element:ElementRef){}
    ngOnInit(){
        this.highlight(this.highlightColor)
    }

    //listeners: native listners
    @HostListener('mouseenter')
    public onMouseMove(){
        this.highlight('green')

    }
    @HostListener('mouseleave')
    public onMouseOut(){
        this.highlight('pink')

    }
    private highlight(color: string) {
        this.element.nativeElement.style.backgroundColor = color;
    }
      
}