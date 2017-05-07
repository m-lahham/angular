import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ShoppingComponent} from '../shopping/shopping.component';
import { SignupComponent } from "../auth/signup/signup.component";
import { SigninComponent } from "../auth/signin/signin.component";

const routes : Routes = [
    {path : '', redirectTo : '/recipe', pathMatch : 'full'},

    {path : 'shopping',component : ShoppingComponent},
    {path : 'signup', component : SignupComponent},
    {path : 'signin', component : SigninComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    declarations : [],
    providers : [],
    exports : [RouterModule]
})
export class AppRoutingModule {}