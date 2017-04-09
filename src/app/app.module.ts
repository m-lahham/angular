import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingComponent } from './shopping/shopping.component';
import {ShoppingItemComponent} from  './shopping/shopping.item.component'
import {ShoppingListEditComponent} from './shopping/shopping.list.edit.component';
import {RecipeDetailsComponent} from './recipe/recipe.details.component';
import {RecipeItemComponent} from './recipe/recipe.item.component';
import {RecipeListComponent} from './recipe/recipe.list.component';
@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    RecipeComponent,
    HeaderComponent,
    ShoppingComponent,
    ShoppingItemComponent,
    ShoppingListEditComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    RecipeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }