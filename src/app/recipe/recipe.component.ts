import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from '../services/recipe.service';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],

})
export class RecipeComponent implements OnInit {
  selectedRecipe : Recipe; 
  // constructor(private recipeService : RecipeService) { }
  constructor() { }

  ngOnInit() {
    // this.recipeService.recipeSelected.subscribe(
    //   (recipe:Recipe) => {
    //     this.selectedRecipe = recipe;
    //   }
    // );
  }

}
