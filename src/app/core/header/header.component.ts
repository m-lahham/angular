import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RecipeService } from "../../services/recipe.service";
import { HttpService } from "../../services/http.service";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

 // @Output('show') display = new EventEmitter<string>();

  constructor(private recipeService : RecipeService, private httpService : HttpService, private authService : AuthService) { }

  ngOnInit() {
  }

  onSave(){
    this.httpService.httpSaveData(this.recipeService.getRecipes() ).subscribe(
      (response)=>{
        console.log(response);
      }
    );
  }

  onFetch(){
        this.httpService.httpFetchData().subscribe(
      (recipesData)=>{
        this.recipeService.setRecipes(recipesData);
        
      }
    );
  }

  onLogout(){
    console.log("logging out");
    this.authService.logout();
  }
  // onSelect(section:string){
  //   this.display.emit(section);
  // }

}
