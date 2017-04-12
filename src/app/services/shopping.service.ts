import {Ingredient} from '../shared/ingredient.model';

export class ShoppingService {

    private ingredients : Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatos',10)
    ]


    getIngredients() : Ingredient[]{
        return this.ingredients.splice();
    }
}