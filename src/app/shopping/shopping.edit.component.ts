import { Component, ViewChild, EventEmitter, Output, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import { ShoppingService } from '../services/shopping.service';
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs/Subscription";
@Component({
    selector : 'app-shopping-edit',
    templateUrl : './shopping.edit.component.html'

})

export class ShoppingEditComponent implements OnInit, OnDestroy {
    //@ViewChild('nameInput') name : ElementRef;
    //@ViewChild('amountInput') amount : ElementRef;
    @ViewChild('editForm') editForm : NgForm;
    //@Output() onAddIngredient = new EventEmitter<Ingredient>();
    private subscription : Subscription ;
    private id : number;
    private editMode : boolean = false;
    constructor(private shoppingService:ShoppingService){}

    onAddItem(){
        //this.shoppingService.addIngredient(new Ingredient(this.name.nativeElement.value,this.amount.nativeElement.value))
        if(!this.editMode)
            this.shoppingService.addIngredient(new Ingredient(this.editForm.value.name,this.editForm.value.amount));
        else{
            this.shoppingService.updateIngredient(this.id, new Ingredient(this.editForm.value.name,this.editForm.value.amount));
            this.editMode = false;
            this.editForm.reset();
        }
    }


    onClear(){
        this.editForm.reset();
        this.editMode = false;
    }

    onDelete(){
        this.shoppingService.deleteIngredient(this.id);
        this.editForm.reset();
        this.editMode = false;
    }
    ngOnInit(){
        this.subscription = this.shoppingService.onIngredientEdit.subscribe(
            (data)=>{
                    this.editForm.form.setValue(data.ingredient);
                    this.editMode = true;
                    this.id = data.id;
                    
            }
        );
        
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

}