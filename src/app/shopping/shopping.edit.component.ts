import {Component, ViewChild, EventEmitter, Output,ElementRef} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import { ShoppingService } from '../services/shopping.service';
import { NgForm } from "@angular/forms";
@Component({
    selector : 'app-shopping-edit',
    templateUrl : './shopping.edit.component.html'

})

export class ShoppingEditComponent{
    //@ViewChild('nameInput') name : ElementRef;
    //@ViewChild('amountInput') amount : ElementRef;
    @ViewChild('editForm') editForm : NgForm;

    onSubmit(){
        
        
    }

    @Output() onAddIngredient = new EventEmitter<Ingredient>();

    constructor(private shoppingService:ShoppingService){}

    
    onAddItem(){
        //this.shoppingService.addIngredient(new Ingredient(this.name.nativeElement.value,this.amount.nativeElement.value))
        this.shoppingService.addIngredient(new Ingredient(this.editForm.value.name,this.editForm.value.amount));
    }
}