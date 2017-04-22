import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RecipeComponent} from '../recipe/recipe.component'
import {ShoppingComponent} from '../shopping/shopping.component';
import {RecipeDetailsComponent} from '../recipe/recipe.details.component';
import {NoRecipeSelectedComponent} from '../recipe/no.recipe.selected';
import {RecipeEditComponent} from '../recipe/recipe-edit/recipe-edit.component';
const routes : Routes = [
    {path : '', redirectTo : '/recipe', pathMatch : 'full'},
    {path : 'recipe',component : RecipeComponent, children : [
        {path : 'new', component : RecipeEditComponent},
        {path : ':id', component : RecipeDetailsComponent},
        {path : ':id/edit', component : RecipeEditComponent},
        {path : '', component : NoRecipeSelectedComponent}
    ]},
    {path : 'shopping',component : ShoppingComponent}
    

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    declarations : [],
    providers : [],
    exports : [RouterModule]
})
export class AppRoutingModule {}