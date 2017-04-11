import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe.list.component.html',
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe("Recipe #1", "This is simply a test recipe","http://technicallyteamann.com/wp-content/uploads/2017/03/Recipe_logo-1.jpeg"),
    new Recipe("Recipe #2", "This is simply aother test recipe","http://technicallyteamann.com/wp-content/uploads/2017/03/Recipe_logo-1.jpeg")
  ];
   
  
  @Output() select = new EventEmitter<Recipe>() ;
  
  constructor() { }

  ngOnInit() {
  }

  selectItem(item:number){ 
    this.select.emit(this.recipes[item]);
  }
}
