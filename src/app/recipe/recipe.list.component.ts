import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Recipe} from './recipe.model';
import {RecipeService} from '../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe.list.component.html',
})
export class RecipeListComponent implements OnInit {
  
  private recipes : Recipe[];
  constructor(private recipeService:RecipeService, private route: ActivatedRoute ,private router : Router) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onCreateRecipe(){
    this.router.navigate(['new'],{relativeTo : this.route});
  }
} 
