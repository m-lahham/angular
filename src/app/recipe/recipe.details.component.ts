import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from '../services/recipe.service'; 
import {Ingredient} from '../shared/ingredient.model';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe.details.component.html',
})
export class RecipeDetailsComponent implements OnInit {
@Input() recipe: Recipe;
  
  addShoppingList = new EventEmitter<Ingredient[]>();

  constructor(private recipeService : RecipeService) {

   }

  addToShopping(){
    this.recipeService.addIngredientsToShopping(this.recipe.ingredients);
  }
  ngOnInit() {
  }

}
