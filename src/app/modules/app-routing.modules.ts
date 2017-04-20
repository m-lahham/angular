import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RecipeComponent} from '../recipe/recipe.component'
import {ShoppingComponent} from '../shopping/shopping.component';
const routes : Routes = [
    {path : '', redirectTo : '/recipe', pathMatch : 'full'},
    {path : 'recipe',component : RecipeComponent},
    {path : 'shopping',component : ShoppingComponent}
    

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    declarations : [],
    providers : [],
    exports : [RouterModule]
})
export class AppRoutingModule {}