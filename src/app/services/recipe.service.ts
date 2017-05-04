import {Injectable, EventEmitter} from '@angular/core';
import {Recipe} from '../recipe/recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';
import { Subject } from "rxjs/Subject";
import { HttpService } from "../services/http.service";

@Injectable()
export class RecipeService {

//recipeSelected = new EventEmitter<Recipe>(); 

constructor(private shoppingService:ShoppingService, private httpService : HttpService){}

  updateRecipeList = new Subject<Recipe[]>();
  private recipes: Recipe[] = [

  ];
 getRecipes() : Recipe[]{
    return this.recipes.slice(); // slice() returns a clone of the array
 }

 setRecipes(recipes : Recipe[]){
   this.recipes = recipes;
   this.updateRecipeList.next(this.getRecipes());
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