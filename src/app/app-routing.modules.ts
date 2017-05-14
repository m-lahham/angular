import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from "./core/home/home.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { SigninComponent } from "./auth/signin/signin.component";



const routes : Routes = [
    {path : '', component : HomeComponent, pathMatch : 'full'},
    {path : 'recipe', loadChildren : './recipe/recipe.module#RecipeModule'},
    {path : 'shopping', loadChildren : './shopping/shopping.module#ShoppingModule'}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    declarations : [],
    providers : [],
    exports : [RouterModule]
})
export class AppRoutingModule {}