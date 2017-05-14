import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {ShoppingService} from './services/shopping.service';
import { HttpService } from "./services/http.service";
import { AuthService } from "./auth/auth.service";
import { AuthGuard } from "./auth/auth-guard.service";
import { SharedModule } from "./shared/shared.module";
import { RecipeService } from "./services/recipe.service";
import { CoreModule } from "./core/core.module";
import { AuthModule } from "./auth/auth.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent
   
  ],
  imports: [
    
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    AuthModule
 ],
  providers: [ShoppingService,RecipeService,HttpService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
