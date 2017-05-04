import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //section : string = 'recipe';
  // onNavigate(display:string){
  //   this.section = display; 
  // }

  ngOnInit(){
    firebase.initializeApp({
       apiKey: "AIzaSyC4BIuISM5lRXOFmEmT7TYwzzsKrOw9VRk",
        authDomain: "ex-ng-http.firebaseapp.com"
    });
  }
}
