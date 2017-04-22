import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

 // @Output('show') display = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  // onSelect(section:string){
  //   this.display.emit(section);
  // }

}
