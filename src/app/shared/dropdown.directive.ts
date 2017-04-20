
import {Directive, HostListener, HostBinding} from '@angular/core';


@Directive({
    selector : '[appDropDown]'
})
export class DropDownDirective{

   @HostBinding('class.open') toggle : boolean = false;
   @HostListener('click') onToggle(){
       this.toggle = !this.toggle;
   }
}