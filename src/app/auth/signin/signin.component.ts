import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { NgForm } from "@angular/forms";
import * as firebase from 'firebase';
import { Router } from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService : AuthService, private router : Router) { }


  onSignin(form : NgForm){
    const email = form.value.email;
    const password = form.value.password;

    this.authService.signinUser(email,password);
      
  }


  ngOnInit() {

  }

}
