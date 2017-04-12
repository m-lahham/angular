import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from '../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe.list.component.html',
})
export class RecipeListComponent implements OnInit {
  
  private recipes : Recipe[];
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
} 
