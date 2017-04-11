import {Directive, HostListener, HostBinding, ElementRef, Renderer2, OnInit} from '@angular/core'; 

@Directive({
    selector : '[appDropDown]'
})

export class DropDownDirective{

    @HostBinding('class.open') toggle:boolean = false;

    @HostListener('click') toggleClick(){
       this.toggle = ! this.toggle;
    }

}