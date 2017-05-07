import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import {ShoppingService} from './services/shopping.service';
import {AppRoutingModule} from './modules/app-routing.modules';


import { HttpService } from "./services/http.service";
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from "./auth/auth.service";
import { AuthGuard } from "./auth/auth-guard.service";
import { SharedModule } from "./shared/shared.module";
import { RecipeService } from "./services/recipe.service";
import { RecipeModule } from "./recipe/recipe.module";
import { ShoppingModule } from "./shopping/shopping.module";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    RecipeModule,
    ShoppingModule, FormsModule
  ],
  providers: [ShoppingService,RecipeService,HttpService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
