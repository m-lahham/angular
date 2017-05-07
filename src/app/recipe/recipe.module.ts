import { NgModule } from "@angular/core";
import { RecipeComponent } from '../recipe/recipe.component';
import {RecipeDetailsComponent} from '../recipe/recipe.details.component';
import {RecipeItemComponent} from '../recipe/recipe.item.component';
import {RecipeListComponent} from '../recipe/recipe.list.component';
import {RecipeService} from '../services/recipe.service';
import{NoRecipeSelectedComponent} from '../recipe/no.recipe.selected';
import { RecipeEditComponent } from '../recipe/recipe-edit/recipe-edit.component';
import { ReactiveFormsModule } from '@angular/forms'
import { RecipeRouterModule } from "./recipe-router.module";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations : [
        RecipeComponent,
        RecipeDetailsComponent,
        RecipeItemComponent,
        RecipeListComponent,
        NoRecipeSelectedComponent,
        RecipeEditComponent
    ],
    imports : [
        CommonModule,
        ReactiveFormsModule, 
        RecipeRouterModule
    ]
})
export class RecipeModule {

}