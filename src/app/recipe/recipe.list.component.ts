import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Recipe} from './recipe.model';
import { RecipeService } from '../services/recipe.service';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe.list.component.html',
})
export class RecipeListComponent implements OnInit,OnDestroy {
  
  private recipes : Recipe[];
  private subscription : Subscription;
  
  constructor(private recipeService:RecipeService, private route: ActivatedRoute ,private router : Router) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();

    this.subscription = this.recipeService.updateRecipeList.subscribe(
      (recipes)=>{
        this.recipes = recipes;
      });

  }

  onCreateRecipe(){
    this.router.navigate(['new'],{relativeTo : this.route});
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
} 
