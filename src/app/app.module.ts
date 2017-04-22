import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingComponent } from './shopping/shopping.component';
import {ShoppingItemComponent} from  './shopping/shopping.item.component'
import {ShoppingEditComponent} from './shopping/shopping.edit.component';
import {ShoppingListComponent} from './shopping/shopping.list.component';
import {RecipeDetailsComponent} from './recipe/recipe.details.component';
import {RecipeItemComponent} from './recipe/recipe.item.component';
import {RecipeListComponent} from './recipe/recipe.list.component';
import {DropDownDirective} from './shared/dropdown.directive';
import {RecipeService} from './services/recipe.service';
import {ShoppingService} from './services/shopping.service';
import {AppRoutingModule} from './modules/app-routing.modules';
import{NoRecipeSelectedComponent} from './recipe/no.recipe.selected';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    RecipeComponent,
    HeaderComponent,
    ShoppingComponent,
    ShoppingItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    RecipeListComponent,
    DropDownDirective,
    NoRecipeSelectedComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
