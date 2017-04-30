import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { RecipeService } from "../../services/recipe.service";
import { Recipe } from "app/recipe/recipe.model";
import { Ingredient } from "app/shared/ingredient.model";


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {

  id:number;
  editMode : boolean = false;
  recipeForm  :FormGroup; 
  ingredientsArray : FormArray;
 
  constructor(private route : ActivatedRoute, private recipeService  :RecipeService, private router : Router) { }

  ngOnInit() {

 

    this.route.params.subscribe(
      (params)=>{
        
        this.id  = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  ngOnDestroy(){

  }


 initForm(){
  let data : Recipe;
  this.ingredientsArray = new FormArray([]);
    if(this.editMode){
      data = this.recipeService.getRecipeItem(this.id);
      
      data.ingredients.forEach(
        (ingredient,i)=>{
          this.ingredientsArray.push(
            new FormGroup({
              'name' : new FormControl(ingredient.name, Validators.required),
              'amount' : new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          )
        });

      
      
    }

  
    this.recipeForm = new FormGroup({
      'name' : new FormControl(data ? data.name : '', Validators.required),
      'imagePath' : new FormControl(data ? data.imagePath : '', Validators.required),
      'description' : new FormControl(data ? data.description : '', Validators.required),
      'ingredients' : this.ingredientsArray
    });
 }

 onAddIngredient(){
   (<FormArray>this.recipeForm.get('ingredients')).push(
     new FormGroup({
       'name' : new FormControl(null,Validators.required),
       'amount' : new FormControl(null,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])

     })
   )
 }

 onSubmit(){
  //  const ingredientsArrayValue : Ingredient[] = [];

  //  (<FormArray>this.recipeForm.get('ingredients')).controls.forEach(
  //    (control)=>{
  //     ingredientsArrayValue.push( new Ingredient((<FormControl>control.get('name')).value,(<FormControl>control.get('amount')).value));
  //    }
  //  );
  //  const recipe = new Recipe(this.recipeForm.get('name').value, this.recipeForm.get('description').value, this.recipeForm.get('imagePath').value,ingredientsArrayValue);

  
console.log(this.recipeForm.value);

   if(this.editMode){
      this.recipeService.updateRecipe(this.recipeForm.value,this.id);
   }else{
       this.recipeService.addNewRecipe(this.recipeForm.value);
   }

    this.router.navigate(['/recipe']);
 }

 onCancel(){
  this.recipeForm.reset();
  this.router.navigate(['/recipe']);
 }

 onDeleteIngredient(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
 }
}
