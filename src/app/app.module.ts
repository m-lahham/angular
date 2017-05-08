import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {ShoppingService} from './services/shopping.service';

import { HttpService } from "./services/http.service";
import { AuthService } from "./auth/auth.service";
import { AuthGuard } from "./auth/auth-guard.service";
import { SharedModule } from "./shared/shared.module";
import { RecipeService } from "./services/recipe.service";

import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from "./app-routing.modules";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SharedModule
 ],
  providers: [ShoppingService,RecipeService,HttpService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
