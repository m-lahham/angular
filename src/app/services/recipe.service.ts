import {EventEmitter} from '@angular/core';
import {Recipe} from '../recipe/recipe.model';

export class RecipeService {

recipeSelected = new EventEmitter<Recipe>(); 
private recipes : Recipe[] = [
    new Recipe("Recipe #1", "This is simply a test recipe","http://technicallyteamann.com/wp-content/uploads/2017/03/Recipe_logo-1.jpeg"),
    new Recipe("Recipe #2", "This is simply aother test recipe","http://technicallyteamann.com/wp-content/uploads/2017/03/Recipe_logo-1.jpeg")
  ];

 getRecipes() : Recipe[]{
    return this.recipes.slice(); // slice() returns a clone of the array
 }
  getRecipeItem(id:number) : Recipe{
     return this.recipes[id]
  }

}