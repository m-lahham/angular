import * as firebase from 'firebase';
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";


@Injectable()
export class AuthService {
    
    token : string;


    constructor(private router : Router){   }
    signupUser(email : string, password : string){
        firebase.auth().createUserWithEmailAndPassword(email,password).catch(
            error=>console.log(error)
        )
    }

    signinUser(email : string, password : string) {
        firebase.auth().signInWithEmailAndPassword(email,password).catch(
            error => {
                console.log(error);
            }
        ).then(
            response => {
                firebase.auth().currentUser.getToken().then(
                    (token) => {
                        this.token = token;
                    }
                );
                console.log(response);
                this.router.navigate(['/']);
            }
        );
    }

    getToken(){
        firebase.auth().currentUser.getToken().then(
            (token) => {
                this.token = token;
            }
        );
        return this.token;
    }

    isAuthenticated(){
        return this.token != null;
    }

    logout(){
        firebase.auth().signOut().then(
            ()=>{
                this.token = null;
            }
        );
    }
}