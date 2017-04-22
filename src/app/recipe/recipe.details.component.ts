import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Recipe} from './recipe.model';
import {RecipeService} from '../services/recipe.service'; 
import {Ingredient} from '../shared/ingredient.model';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe.details.component.html',
})
export class RecipeDetailsComponent implements OnInit {
// @Input() recipe: Recipe;
recipe: Recipe;
  id:string;
  addShoppingList = new EventEmitter<Ingredient[]>();

  constructor(private recipeService : RecipeService, private  route : ActivatedRoute) {

   }

  addToShopping(){
    this.recipeService.addIngredientsToShopping(this.recipe.ingredients);
  }
  ngOnInit() {
      // this.id = this.route.snapshot.params['id'];
      // this.recipe = this.recipeService.getRecipeItem(+this.id);
      this.route.params.subscribe(
        (params)=>{
          this.id = params['id'];
           this.recipe = this.recipeService.getRecipeItem(+this.id);
        }
      );

     
  }

}
