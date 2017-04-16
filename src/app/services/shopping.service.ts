import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class ShoppingService {

    private ingredients : Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatos',10)
    ]

onIngredientChanged = new EventEmitter<Ingredient[]>();
 getIngredients() : Ingredient[]{
        return this.ingredients.slice();
    }

 addIngredient(...newIngredient : Ingredient[]){
    this.ingredients.push(...newIngredient);
    this.onIngredientChanged.emit(this.ingredients.slice());
  }    
}