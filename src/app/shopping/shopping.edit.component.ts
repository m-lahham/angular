import {Component, ViewChild, EventEmitter, Output,ElementRef} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
@Component({
    selector : 'app-shopping-edit',
    templateUrl : './shopping.edit.component.html'

})

export class ShoppingEditComponent{
    @ViewChild('nameInput') name : ElementRef;
    @ViewChild('amountInput') amount : ElementRef;

    @Output() onAddIngredient = new EventEmitter<Ingredient>();

    onAdd(){
        this.onAddIngredient.emit(new Ingredient(this.name.nativeElement.value,this.amount.nativeElement.value));
    }
}