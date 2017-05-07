
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecipeComponent } from '../recipe/recipe.component';
import {RecipeDetailsComponent} from '../recipe/recipe.details.component';
import{NoRecipeSelectedComponent} from '../recipe/no.recipe.selected';
import { RecipeEditComponent } from '../recipe/recipe-edit/recipe-edit.component';
import { AuthGuard } from "../auth/auth-guard.service";


const router : Routes = [    {path : 'recipe',component : RecipeComponent, children : [
        {path : 'new', component : RecipeEditComponent, canActivate: [AuthGuard]},
        {path : ':id', component : RecipeDetailsComponent},
        {path : ':id/edit', component : RecipeEditComponent, canActivate: [AuthGuard]},
        {path : '', component : NoRecipeSelectedComponent}
    ]}]

@NgModule({
    imports : [RouterModule.forChild(router)],
    exports : [RouterModule]
})
 
export class RecipeRouterModule{}