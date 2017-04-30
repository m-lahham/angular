import {Injectable, EventEmitter} from '@angular/core';
import {Recipe} from '../recipe/recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';
import { Subject } from "rxjs/Subject";

@Injectable()
export class RecipeService {

//recipeSelected = new EventEmitter<Recipe>(); 

constructor(private shoppingService:ShoppingService){}

  updateRecipeList = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe('Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];
 getRecipes() : Recipe[]{
    return this.recipes.slice(); // slice() returns a clone of the array
 }
  getRecipeItem(id:number) : Recipe{
    console.log(id +'  ' + this.recipes[id]);
     return this.recipes[id];
  }

  addIngredientsToShopping(newIngredient : Ingredient[]){
    this.shoppingService.addIngredient(...newIngredient);
  } 

  addNewRecipe(recipe : Recipe){
    this.recipes.push(recipe);
    this.updateRecipeList.next(this.getRecipes());
  }

  updateRecipe(recipe : Recipe, index : number){
    this.recipes[index] = recipe;
  }

  deleteRecipe(index : number){
    this.recipes.splice(index,1);
    this.updateRecipeList.next(this.getRecipes());
  }
}