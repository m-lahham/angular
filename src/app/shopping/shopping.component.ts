import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingService} from '../services/shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css'],
  providers : []
})
export class ShoppingComponent implements OnInit {
  ingredients : Ingredient[];
  constructor(private shoppingService : ShoppingService) { }

  ngOnInit() {

    this.ingredients = this.shoppingService.getIngredients();

    this.shoppingService.onIngredientChanged.subscribe(
      (ingredients) => {
        this.ingredients = ingredients;
      }
    );
  }

}
