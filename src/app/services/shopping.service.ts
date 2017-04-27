import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingService {

    private ingredients : Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatos',10)
    ]

//onIngredientChanged = new EventEmitter<Ingredient[]>();
onIngredientChanged = new Subject<Ingredient[]>();
onIngredientEdit = new Subject<{id:number, ingredient : Ingredient}>();
 getIngredients() : Ingredient[]{
        return this.ingredients.slice();
    }

 addIngredient(...newIngredient : Ingredient[]){
    this.ingredients.push(...newIngredient);
    this.onIngredientChanged.next(this.ingredients.slice());
  }    

  editIngredient(item){
      this.onIngredientEdit.next({id: item, ingredient: this.ingredients[item]});
  }

  updateIngredient(id : number, ingredient : Ingredient){
    this.ingredients[id] = ingredient;
    this.onIngredientChanged.next(this.ingredients.slice());
  }

  deleteIngredient(id : number){
    this.ingredients.splice(id,1);
    this.onIngredientChanged.next(this.ingredients.slice());
  }
}