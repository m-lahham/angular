import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  section : string = 'recipe';
  onNavigate(display:string){
    this.section = display; 
  }
}
