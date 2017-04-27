import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingService} from '../services/shopping.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
  providers : []
})
export class ShoppingComponent implements OnInit, OnDestroy {
  ingredients : Ingredient[];
  private subscription : Subscription;
  editItem : Ingredient;

  constructor(private shoppingService : ShoppingService) { }

  ngOnInit() {

    this.ingredients = this.shoppingService.getIngredients();

    this.subscription = this.shoppingService.onIngredientChanged.subscribe(
      (ingredients) => {
        this.ingredients = ingredients;
      }
    );
  }

  onEdit(item){
     this.shoppingService.editIngredient(item);
  }

  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
