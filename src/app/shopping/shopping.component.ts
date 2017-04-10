import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {
  
  constructor() { }
 
  ingredients : Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatos',10)
  ]

  onAddNewIngredient(newIngredient : Ingredient){
    this.ingredients.push(newIngredient);
  }
  ngOnInit() {
  }

}
