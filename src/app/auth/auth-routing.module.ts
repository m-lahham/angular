import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "../auth/signup/signup.component";
import { SigninComponent } from "../auth/signin/signin.component";


const routes : Routes = [
    {path : 'signup', component : SignupComponent},
    {path : 'signin', component : SigninComponent}
];


@NgModule({
    declarations : [],
    imports : [RouterModule.forChild(routes)],
    exports : [RouterModule]    
})
export class AuthRoutingModule{

}